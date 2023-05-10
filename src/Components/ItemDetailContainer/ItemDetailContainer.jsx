import Navbar from "../Navbar"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
  return (
    <>
      <Navbar />
      <div className='ItemDetailContainer'>
        <ItemDetail/>
      </div>
    </>
  )
}

export default ItemDetailContainer
