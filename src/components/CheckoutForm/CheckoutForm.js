import React, { useState } from "react";
import "./CheckoutForm.css"

const CheckoutForm = ({ onConfirm }) => {
  const [name, setname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState ('')

  const handleConfirm = (event) => {
    event.preventDefault()
    const userData = {
      name: "",
      phone: "",
      email: "",
    }

    onConfirm(userData)
  
  }

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  
  //   onConfirm(formData);
  // };

  return (
    <form onSubmit={handleConfirm} className="Form">
      <div>
        <label className="Label">Nombre:
        <input
          className="Input"
          type="text"
          id="name"
          value={name}
          onChange={({ target }) => setname(target.value)}
          required
        />
        </label>
      </div>
      <div>
        <label htmlFor="phone">Teléfono:
        <input
          className="Input"
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          required
        />
        </label>
      </div>
      <div>
        <label htmlFor="email">Correo Electrónico:
        <input
          className="Input"
          type="text"
          id="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        </label>
      </div>
      <div>
        <button type="submit">Confirmar Orden</button>
      </div>
    </form>
  );
};

export default CheckoutForm;