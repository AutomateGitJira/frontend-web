export function mapPaymentError(code: string): string {
  // SHOP-2: map backend payment errors to safe user-facing copy
  if (code === "PAYMENT_FAILED") {
    return "Your payment could not be completed. Please retry or use another payment method.";
  }

  return "Something went wrong during payment. Please try again.";
}