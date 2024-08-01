import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";

const PlaceOrder = () => {

  const { getTotalCartAmount ,token,food_list,cartItems,url} = useContext(StoreContext);

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""

  })

  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  return (
    <div>
      <form action="" className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>

          <div className="multi-fields">
            <input type="text" name="firstName" onChange={onChangeHandler} value={data.firstName} id="" placeholder="First Name" />
            <input type="text" name="lastName" onChange={onChangeHandler} value={data.lastName} id="" placeholder="Last Name" />
          </div>

          <input type="text" name="email" onChange={onChangeHandler} value={data.email} id="" placeholder="Email Address" />
          <input type="text" name="street" onChange={onChangeHandler} value={data.street} id="" placeholder="Street" />

          <div className="multi-fields">
            <input type="text" name="city" onChange={onChangeHandler} value={data.city} id="" placeholder="City" />
            <input type="text" name="state" onChange={onChangeHandler} value={data.state} id="" placeholder="State" />
          </div>

          <div className="multi-fields">
            <input type="text" name="zipcode" onChange={onChangeHandler} value={data.zipcode} id="" placeholder="Zip Code" />
            <input type="text" name="country" onChange={onChangeHandler} value={data.country} id="" placeholder="Country" />
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
