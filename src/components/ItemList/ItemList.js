import './ItemList.css';
import Item from '../Item/Item';



const ItemList = ({ products }) => {
//   const promesa = new Promise((resolve, reject) => {
//     const flag = false;

// setTimeout(() => {

//     if(flag) {
//         resolve("es verdadero");
//     } else{
//         reject ("es falso");
//     }
//     },500);
// });
//    promesa
//    .then((res) => {
//         console.log(res);
//    })
//    .catch((err) => {
//         console.error(err);
//    });



//  if (!products) {
//  console.error("Error: 'products' no está definido o es nulo en el componente ItemList.");
//  return <p>Error: No hay productos disponibles.</p>;
//  }


  //     // Verifica si products es undefined o null antes de usar map
  // if (!products) {
  //   console.error("Error: 'products' is undefined or null.");
  //   return null; // Otra acción apropiada, como un mensaje de error o retorno vacío
  // }
    return (
        <div className='ListGroup'>
          
            {
            products.length > 0 
            ? products.map(prod => <Item key={prod.id} {...prod}/>): <p> Cargando </p>
            }
        </div>
    );
};


export default ItemList;