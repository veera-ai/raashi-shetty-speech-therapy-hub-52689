import React, { useState } from "react";
import "./Payments.css";

// PUBLIC_INTERFACE
function Payments() {
  /**
   * User-initiated payment for therapy/session/video.
   * (Stripe logic should call backend for payment intent creation.)
   */
  const [status, setStatus] = useState("idle");

  // PUBLIC_INTERFACE
  const handlePay = () => {
    setStatus("inprogress");
    // Simulate payment:
    setTimeout(() => setStatus("success"), 1200);
  };

  return (
    <section className="sb-payments-page">
      <h1>Pay for a Session or Video</h1>
      <div className="sb-payments-box">
        <label>
          Amount (INR)
          <input type="number" min={500} value={1200} readOnly />
        </label>
        <button
          className="sb-btn sb-btn-main"
          disabled={status === "inprogress" || status === "success"}
          onClick={handlePay}
        >
          {status === "idle" && "Pay with Stripe"}
          {status === "inprogress" && "Processing..."}
          {status === "success" && "Payment Successful"}
        </button>
      </div>
      {status === "success" && (
        <p className="sb-payment-success-msg">
          Your payment was successful! We'll email you the details soon.
        </p>
      )}
      {status === "inprogress" && (
        <p className="sb-payment-progress-msg">
          Please wait, processing payment...
        </p>
      )}
    </section>
  );
}
export default Payments;
