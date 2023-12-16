
const products = [
    {
        id: '1',
        name: 'Alfombra Gris',
        price: 40000,
        category: 'alfombras',
        img: "../assets/alfombragris.svg",
        stock: '5',
        description: 'Descripcion alfombra gris'
    },
    {
        id: '2',
        name: 'Almohadon Rayas',
        price: 10000,
        category: 'almohadones',
        img: '../assets/almohadongris.svg',
        stock: '5',
        description: 'Descripcion Almohadon Rayas'
    },
    {
        id: '3',
        name: 'Silla Cuerdas',
        price: 30000,
        category: 'muebles',
        img: '../assets/sillasoga.svg',
        stock: '5',
        description: 'Descripcion Silla Cuerda'
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500 );
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productsByCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productsByCategory))
        }, 500)
    })
}
