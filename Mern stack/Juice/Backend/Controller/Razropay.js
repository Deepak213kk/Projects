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
