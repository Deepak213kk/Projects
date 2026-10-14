
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendOrderEmail(order, paymentMethod) {
  const customer = order.user || {};
  const items = order.items || [];

  const itemLines = items.map((item) =>
    `${item.name} x ${item.qty} — ₹${item.price}`
  ).join("\n");

  return transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `New Juice Veda Order - ${order._id}`,
    text: `
New order received at Juice Veda Corner!

Order ID: ${order._id}
Customer: ${customer.name || "Not provided"}
Phone: ${customer.contact || customer.phone || "Not provided"}
Address: ${customer.address || "Not provided"}
Payment method: ${paymentMethod}
Total: ₹${order.amount ?? order.totalAmount ?? "Check order record"}

Items:
${itemLines || "See order record"}

Please check your admin dashboard to manage this order.
    `,
  });
}
