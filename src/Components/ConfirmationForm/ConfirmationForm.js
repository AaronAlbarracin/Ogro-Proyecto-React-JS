import React, { useState } from 'react';
import '../Style/Form.css';

const ConfirmationForm = ({ onConfirm }) => {
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleConfirm = (event) => {
    event.preventDefault();
    const userData = {
      title,
      phone,
      email,
    };

    // // Verificar que todos los valores estén definidos
    // if (!name || !phone || !email) {
    //   console.error('Uno o más valores son undefined');
    //   return;
    // }

    onConfirm(userData);
  };

  return (
    <div className="Container">
      <form onSubmit={handleConfirm} className="Form">
        <label className="Label">
          Nombre
          <input
            className="Input"
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </label>
        <label className="Label">
          Telefono
          <input
            className="Input"
            type="number"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label className="Label">
          Email
          <input
            className="Input"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <div className="Label">
          <button type="submit" className="Button">
            Crear Orden
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmationForm;
