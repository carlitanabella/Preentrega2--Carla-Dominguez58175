import './ItemDetail.css'
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount.js'
import { Link } from 'react-router-dom'

import { CartContext } from '../../Context/CartContext.js'


const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)


    const handleOnAdd = (quantity) => {
    setQuantityAdded (quantity)

   const item = {
        id, name, price
   }
    addItem(item, quantity)
 }

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='Itemheader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='itemImg'/>
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${price}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='Itemfooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to="/cart" className='Option'>Terminar Compra </Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                // <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.img('Cantidad agregada', quantity)} />
            }
            </footer>
        </article>
    )
}

export default ItemDetail