import { GoDotFill } from "react-icons/go";
import Billingpayment from '../images/billingpayment.png'
import { useNavigate } from "react-router-dom";

// BillingPayments.js
export default function BillingPayments() {
  const navigate = useNavigate();

  const creatbillClick = () => {
    navigate("/createbillform");
  };

  return (
    <div className="bg-white rounded-lg" style={{ width: "70%", height: "520px" }}>
      <div className="p-4 shadow-xs rounded-lg">
        <div className="d-flex aling-items-center justify-content-between border-bottom pb-2" >
          <h3 className="text-lg font-bold">Billing & Payments</h3>
          <button onClick={creatbillClick} className="text-white px-3 rounded fw-normal h-8" style={{ backgroundColor: "#0EABEB" }}>Create Bills</button>
        </div>
        <span className="d-flex py-2 text-lg"><GoDotFill className="text-red-600 mt-1 me-1" />Pending Bills : 00</span>
        <div className="d-flex aling-items-center justify-content-center">
          <img
            src={Billingpayment}
            className="d-flex aling-items-center justify-content-center my-5 py-4"
          />
        </div>
      </div>
    </div>
  );
}
