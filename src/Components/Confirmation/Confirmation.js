import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import {
  Timestamp,
  addDoc,
  collection,
  documentId,
  getDocs,
  query,
  where,
  writeBatch,
} from 'firebase/firestore';
import { db } from '../../Service/Firebase/firebaseConfig';
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm';

const Confirmation = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ title, phone, email }) => {
    if (!title || !phone || !email || !cart || !total) {
      return;
    }

    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          title,
          phone,
          email,
        },
        item: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
        
      }
      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map((prod) => prod.id);

      const itemsRef = collection(db, 'Items');
      const itemsAddedFromFirestore = await getDocs(query(itemsRef, where(documentId(), 'in', ids)));
      const { docs } = itemsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const itemsAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = itemsAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, 'orders');
        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error('Hay productos que están fuera de stock');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se está generando su orden, por favor espere...</h1>;
  }

  if (orderId) {
    return <h1 className='OrdenGenerada'>El ID de su orden es: <span>{orderId}</span></h1>;
  }

  return (
    <div>
      <h1>Confirmación</h1>
      <ConfirmationForm onConfirm={createOrder} />
    </div>
  );
};

export default Confirmation;
