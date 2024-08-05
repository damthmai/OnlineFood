import React from 'react'
import './Order.css'
import { useState } from 'react'
import axios from "axios"
import {toast} from "react-toastify"
import { useEffect } from 'react'

const Order = () => {

  const [orders,setOrders] = useState([])
   const url = `http://localhost:4000`
  
  const fetchAllOrders = async () =>{
    const response = await axios.get(url+"/api/order/list")
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    }
    else{
      toast.error("Error")
      console.error("Fetch orders failed:", response.data && response.data.message);
    }
  }

 

  useEffect(()=>{
    fetchAllOrders();
  },[])

  return (
    <div>
     order 
    </div>
  )
}

export default Order
