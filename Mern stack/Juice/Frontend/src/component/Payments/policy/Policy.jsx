import React from "react";
import { Container } from "react-bootstrap";

import "./policy.css";

const PageLayout = ({ title, children }) => (
  <div className="policy-wrapper">
    <Container>
      <div className="policy-card">
        <h1 className="policy-title">{title}</h1>
        <div className="policy-content">{children}</div>
      </div>
    </Container>
  </div>
);

export const Terms = () => (
  <PageLayout title="Terms & Conditions">
    <p>Welcome to <strong>Juice Veda</strong>. By accessing our services, you agree to the following terms.</p>

    <h4>Services</h4>
    <p>We provide freshly prepared juices made to order through our platform.</p>

    <h4>Orders</h4>
    <p>Orders cannot be canceled once preparation has started.</p>

    <h4>Pricing</h4>
    <p>Prices may change without prior notice.</p>

    <h4>Liability</h4>
    <p>We are not responsible for delays beyond our control.</p>

    <h4>Acceptance</h4>
    <p>By placing an order, you accept these terms.</p>
  </PageLayout>
);

export const Privacy = () => (
  <PageLayout title="Privacy Policy">
    <p>Your privacy is important to us at <strong>Juice Veda</strong>.</p>

    <h4>Information Collection</h4>
    <p>We collect name, phone number, and address for order fulfillment.</p>

    <h4>Usage</h4>
    <p>Information is used only to process orders and improve services.</p>

    <h4>Data Sharing</h4>
    <p>No personal data is shared except with secure payment providers.</p>

    <h4>Security</h4>
    <p>We use industry-standard security measures.</p>

    <h4>Consent</h4>
    <p>Using our site means you agree to this policy.</p>
  </PageLayout>
);

export const Refund = () => (
  <PageLayout title="Refund Policy">
    <p>We aim to deliver high-quality fresh products.</p>

    <h4>No Refund</h4>
    <p>Fresh items are non-refundable after preparation.</p>

    <h4>Order Issues</h4>
    <p>Report incorrect items within 1 hour of delivery.</p>

    <h4>Processing</h4>
    <p>Approved refunds are processed within 5–7 business days.</p>

    <h4>Contact</h4>
    <p>Email: support@juiceveda.com</p>
  </PageLayout>
);

export default Terms;