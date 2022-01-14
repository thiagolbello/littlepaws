import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
        <Route path="/detalles/:itemId"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
