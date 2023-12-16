

return (
    <div className="ContainerCart">
        <h1 className="maintittle"> Carrito </h1>
        <div className="Productdetails">
            <h4>{`${description}`}</h4>
            <p>{`Precio Unidad: ${price}`}</p>
            <p>{`Cantidad:${ItemCount}`}</p>
            <p>{`Precio Total: $${cart.price * cont}`}</p>

        </div>
        <h2>{`Precio Total: $${cart.price * cont}`}</h2>
        <button>Vaciar</button>
        <Link to="/CheckOut" className='Option'>Finalizar Compra </Link>

    </div>
)