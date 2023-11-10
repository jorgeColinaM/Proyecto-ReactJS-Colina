import "./Checkout.css"

import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Timestamp, writeBatch } from "firebase/firestore";
import { db } from "../../App";
import CheckoutForm from "./CheckoutForm";
import { collection, addDoc } from "firebase/firestore";
import { nanoid } from "nanoid";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      // Reference to the 'orders' collection
      const ordersRef = collection(db, "orders");

      // Add the order to the 'orders' collection
      const orderDocRef = await addDoc(ordersRef, objOrder);

      // Generate a unique order ID
      const orderId = nanoid();

      // Update the state with the order ID
      setOrderId(orderId);

      // Clear the cart after creating the order
      clearCart();
    } catch (error) {
      console.error("Error creating order:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se está generando la orden</h1>;
  }

  if (orderId) {
    return <h1>El id de su orden es: {orderId} </h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;