// import React, { useContext, useEffect, useState , useNavigate} from "react";
// import "./PlaceOrder.css";
// import { StoreContext } from "../../Context/StoreContext";
// import axios from "axios";

// const PlaceOrder = () => {

//   const { getTotalCartAmount ,token,food_list,cartItems,url} = useContext(StoreContext);

//   const [data,setData] = useState({
//     firstName:"",
//     lastName:"",
//     email:"",
//     street:"",
//     city:"",
//     state:"",
//     zipcode:"",
//     country:"",
//     phone:""

//   })

//   const onChangeHandler = (event) =>{
//     const name = event.target.name;
//     const value = event.target.value;
//     setData(data=>({...data,[name]:value}))
//   }

//   const placeOrder = async (event) => {
//     event.preventDefault()
//     let orderItems = []
//     food_list.map((item)=>{
//       if (cartItems[item._id]>0) {
//         let itemInfo = item;
//         itemInfo["quantity"] = cartItems[item._id]
//         orderItems.push(itemInfo)
//       }
//     })
//     let orderData = {
//       address : data,
//       items:orderItems,
//       amount:getTotalCartAmount()+2,
//     }
//     let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
//     if (response.data.success) {
//       const {session_url} = response.data;
//       window.location.replace(session_url);
//     }
//     else{
//       alert("Error")
//     }
//   }

//   const navigate = useNavigate();
  
//   useEffect(()=>{
//     if (!token) {
//       navigate('/cart')
//     }
//     else if(getTotalCartAmount() === 0){
//       navigate('/cart')

//     }
//   },[token])

//   return (
//     <div>
//       <form onSubmit={placeOrder} action="" className="place-order">
//         <div className="place-order-left">
//           <p className="title">Delivery Information</p>

//           <div className="multi-fields">
//             <input required type="text" name="firstName" onChange={onChangeHandler} value={data.firstName} id="" placeholder="First Name" />
//             <input required type="text" name="lastName" onChange={onChangeHandler} value={data.lastName} id="" placeholder="Last Name" />
//           </div>

//           <input required type="text" name="email" onChange={onChangeHandler} value={data.email} id="" placeholder="Email Address" />
//           <input required type="text" name="street" onChange={onChangeHandler} value={data.street} id="" placeholder="Street" />

//           <div className="multi-fields">
//             <input required type="text" name="city" onChange={onChangeHandler} value={data.city} id="" placeholder="City" />
//             <input required type="text" name="state" onChange={onChangeHandler} value={data.state} id="" placeholder="State" />
//           </div>

//           <div className="multi-fields">
//             <input required type="text" name="zipcode" onChange={onChangeHandler} value={data.zipcode} id="" placeholder="Zip Code" />
//             <input required type="text" name="country" onChange={onChangeHandler} value={data.country} id="" placeholder="Country" />
//           </div>

//           <input required type="text" onChange={onChangeHandler} value={data.phone} name="phone"  id="" placeholder="Phone Number" />
//         </div>

//         <div className="place-order-right">

//           <div className="cart-total">
//             <h2>Cart Totals</h2>
//             <div>
//               <div className="cart-total-details">
//                 <p>Subtotal</p>
//                 <p>${getTotalCartAmount() ===0 ?0:2}</p>
//               </div>
//               <hr />
//               <div className="cart-total-details">
//                 <p>Delivery Fee</p>
//                 <p>{2}</p>
//               </div>
//               <hr />
//               <div className="cart-total-details">
//                 <b>Total</b>
//                 <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
//               </div>
//               <button type="submit">
//                 PROCEED TO PAYMENT
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PlaceOrder;


import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(
    StoreContext
  );

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        street: data.street,
        city: data.city,
        state: data.state,
        zipcode: data.zipcode,
        country: data.country,
        phone: data.phone,
      },
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    try {
      let response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert("Error placing order");
      }
    } catch (error) {
      console.error("Error placing order:", error.message);
      alert("Error placing order");
    }
  };

  useEffect(() => {
    if (!token) {
      // Redirect to login or cart page if no token available
      // Example: navigate('/login');
    } else if (getTotalCartAmount() === 0) {
      // Redirect to cart page if cart is empty
      // Example: navigate('/cart');
    }
  }, [token]);

  return (
    <div>
      <form onSubmit={placeOrder} className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>

          <div className="multi-fields">
            <input
              required
              type="text"
              name="firstName"
              onChange={onChangeHandler}
              value={data.firstName}
              placeholder="First Name"
            />
            <input
              required
              type="text"
              name="lastName"
              onChange={onChangeHandler}
              value={data.lastName}
              placeholder="Last Name"
            />
          </div>

          <input
            required
            type="text"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            placeholder="Email Address"
          />
          <input
            required
            type="text"
            name="street"
            onChange={onChangeHandler}
            value={data.street}
            placeholder="Street"
          />

          <div className="multi-fields">
            <input
              required
              type="text"
              name="city"
              onChange={onChangeHandler}
              value={data.city}
              placeholder="City"
            />
            <input
              required
              type="text"
              name="state"
              onChange={onChangeHandler}
              value={data.state}
              placeholder="State"
            />
          </div>

          <div className="multi-fields">
            <input
              required
              type="text"
              name="zipcode"
              onChange={onChangeHandler}
              value={data.zipcode}
              placeholder="Zip Code"
            />
            <input
              required
              type="text"
              name="country"
              onChange={onChangeHandler}
              value={data.country}
              placeholder="Country"
            />
          </div>

          <input
            required
            type="text"
            onChange={onChangeHandler}
            value={data.phone}
            name="phone"
            placeholder="Phone Number"
          />
        </div>

        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount() + 2}</b>
              </div>
              <button type="submit">PROCEED TO PAYMENT</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
