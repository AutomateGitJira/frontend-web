export function SepaPaymentForm() {
  return (
    <form>
      {/* SHOP-1: TODO wire backend validation result into this field */}
      <input name="iban" placeholder="IBAN" />
    </form>
  );
}