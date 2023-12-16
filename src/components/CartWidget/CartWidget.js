import './CartWidget.js'
import cart from './assets/carrito.svg'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
// import { tooltipClasses } from '@mui/material'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        
        <div> 
        <Link to='/cart' className='CartWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}} />
        <img src={cart} alt='cart-widget' style={{ height: '50px' }} />
        { totalQuantity }
              
        </div>
    )
}

export default CartWidget;