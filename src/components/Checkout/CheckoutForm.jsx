import { useState } from "react";
import "./Checkout.css"

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    console.log("Submit button clicked"); // Add this line for debugging

    const userData = {
      name,
      phone,
      email,
    };

    console.log("User data:", userData); // Add this line for debugging

    // Call the onConfirm function to process the order
    onConfirm(userData);

    // Clear the form inputs by resetting their values
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <div className="Container">
      <form onSubmit={handleConfirm} className="Form">
        <label className="Label">
          Nombre
          <input
            className="input"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label className="Label">
          Telefono
          <input
            className="input"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label className="Label">
          Email
          <input
            className="input"
            type="Email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <div className="Label">
          <button  type="submit" className="Button">
            Crear Orden
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;