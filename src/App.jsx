import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './components/Cart/CartContext';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Nav from './components/Nav';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
          <Route path="/detalles/:detallesId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
