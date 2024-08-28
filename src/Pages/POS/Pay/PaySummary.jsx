import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const PaySummary = () => {
  const { total, discount, amountPaid } = useSelector((state) => state.cart);

  const balance = amountPaid - total;

  return (
    <div className="pay-summary-section">
      <h2>Payment Summary</h2>
      <div className="cart-totals mt-3">
        <div className="cart-total-item">
          <span className="cart-total-label txt-primary">Payable Amount:</span>
          <span className="cart-total-value">Rs. {total}</span>
        </div>
        <div className="cart-total-item">
          <span className="cart-total-label txt-info">Amount Paid:</span>
          <span className="cart-total-value">Rs. {amountPaid}</span>
        </div>
        <div className="cart-total-item">
          <span className="cart-total-label">Balance:</span>
          <span className="cart-total-value">Rs. {balance}</span>
        </div>
      </div>
    </div>
  );
};

export default PaySummary;
