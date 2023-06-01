import ItemDetail from '../ItemDetail/ItemDetail'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../Service/Firebase/firebaseConfig'

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)

    const docRef = doc(db, 'Items', itemId)

    getDoc(docRef)
      .then(response => {
        const data = response.data()
        const itemAdapted = { id: response.id, ...data }
        setItem(itemAdapted)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [itemId])

  if (loading) {
    return <div>Cargando...</div>
  }

  return (
    <div className='ItemDetailContainer'>
      <ItemDetail {...item} />
    </div>
  )
}

export default ItemDetailContainer
