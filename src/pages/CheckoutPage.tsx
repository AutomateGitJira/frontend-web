import { mapPaymentError } from "../lib/paymentErrorMapper";
import { ErrorBanner } from "../components/common/ErrorBanner";

export function CheckoutPage({ paymentErrorCode }: { paymentErrorCode?: string }) {
  const errorMessage = paymentErrorCode ? mapPaymentError(paymentErrorCode) : null;

  return (
    <div>
      <h1>Checkout</h1>

      {/* SHOP-2: show visible error banner for failed card payments */}
      {errorMessage && <ErrorBanner message={errorMessage} />}

      {/* SHOP-1: SEPA validation error still needs final UI wiring */}
      <div id="payment-form" />
    </div>
  );
}