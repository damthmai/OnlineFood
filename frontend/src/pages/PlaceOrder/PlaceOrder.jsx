import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);



  return (
    <div>
      <form action="" className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>

          <div className="multi-fields">
            <input type="text" name="" id="" placeholder="First Name" />
            <input type="text" name="" id="" placeholder="Last Name" />
          </div>

          <input type="text" name="" id="" placeholder="Email Address" />
          <input type="text" name="" id="" placeholder="Street" />

          <div className="multi-fields">
            <input type="text" name="" id="" placeholder="City" />
            <input type="text" name="" id="" placeholder="State" />
          </div>

          <div className="multi-fields">
            <input type="text" name="" id="" placeholder="Zip Code" />
            <input type="text" name="" id="" placeholder="Country" />
          </div>

          <input type="text" name="" id="" placeholder="Phone Number" />
        </div>

        <div className="place-order-right">

          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount() ===0 ?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
              <button>
                PROCEED TO PAYMENT
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
