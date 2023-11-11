import { useContext, useState } from "react";
import { Timestamp} from "firebase/firestore";
import { db } from "../../Firebase/Config";
import CheckoutForm from "./CheckoutForm";
import { collection, addDoc } from "firebase/firestore";
import { nanoid } from "nanoid";
import "./Checkout.css"
import { CartContext } from '../../CartContext/CartContext';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, total, removeProducts } = useContext(CartContext);

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

      const ordersRef = collection(db, "orders");
      const orderDocRef = await addDoc(ordersRef, objOrder);
      const orderId = nanoid();

      setOrderId(orderId);

      removeProducts();
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