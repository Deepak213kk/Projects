
const crypto = require("crypto");

app.post("/verify-payment", async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", "YOUR_KEY_SECRET")
    .update(body)
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    // ✅ Save payment
    await Payment.create({
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      signature: razorpay_signature,
      status: "success",
    });

    // ✅ Update order
    await Order.findOneAndUpdate(
      { orderId: razorpay_order_id },
      { status: "paid" }
    );

    //send email to user
    await transporter.sendMail({
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "🛒 New Paid Order",
    html: `
      <h2>Payment Successful 🎉</h2>

      <p>A new order has been placed.</p>

      <p><b>Order ID:</b> ${req.body.razorpay_order_id}</p>
      <p><b>Payment ID:</b> ${req.body.razorpay_payment_id}</p>
    `,
  });

    res.json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
});

app.post("/create-order", async (req, res) => {
  const { amount, items, user } = req.body;

  const options = {
    amount: amount * 100, // ₹220 → 22000
    currency: "INR",
    receipt: "receipt_123",
  };

  const order = await razorpay.orders.create(options);

  // save in DB
  const newOrder = await Order.create({
    orderId: order.id,
    amount: options.amount,
    items,
    user,
  });

  res.json(order);
});
