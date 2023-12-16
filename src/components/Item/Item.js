
import './Item.css';
import { Link } from 'react-router-dom'


const Item = ({id, name, img, price, stock}) => {

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
                <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    );
};

export default Item;