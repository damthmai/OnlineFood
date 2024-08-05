// import React, { useContext } from "react";
// import "./Verify.css";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import StoreContext from "../../Context/StoreContext";
// import axios from "axios";
// const Verify = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const success = searchParams.get("success");
//   const orderId = searchParams.get("orderId");
//   //   const { url } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const url = "http://localhost:4000";

//   const veryfyPayment = async () => {
//     const response = await axios.post(url + "/api/order/verify", {
//       success,
//       orderId,
//     });
//     if (response.data.success) {
//       navigate("/myorders");
//     } else {
//       navigate("/");
//     }
//   };

//   return (
//     <div className="verify">
//       <div className="spinner"></div>
//     </div>
//   );
// };

// export default Verify;

import React, { useEffect } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const navigate = useNavigate();

  const url = "http://localhost:4000";

  const verifyPayment = async () => {
    try {
      const response = await axios.post(url + "/api/order/verify", {
        success,
        orderId,
      });
      if (response.data.success) {
        navigate("/myorders");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Verification failed", error);
      navigate("/");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [success, orderId, navigate]);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
