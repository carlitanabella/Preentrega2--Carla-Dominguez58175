import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.js'


const ItemDetail = ({id, name, img, category, description, price, stock}) => {

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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.img('Cantidad agregada', )} />
            </footer>
        </article>
    )
}

export default ItemDetail