import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' elememt={< ItemListContainer />} />
        <Route path='/category/:categoryId' elememt={< ItemListContainer />} />
        <Route path='/item/:itemId' elememt={< ItemDetailContainer />} />
        <Route path='*' elememt={<h1>404 not found</h1>} /> 

      </Routes>
      <ItemListContainer greeting={'Bienvenidos'} />
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
      <ItemDetailContainer />
      </BrowserRouter>


    </div>
  );
}

export default App;


