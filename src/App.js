import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import ProductList from './component/ProductList';
import ProductDetails from './component/ProductDetails';
import LaptopList from './component/LaptopList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='dien-thoai/*'>
          <Route path='' element={<ProductList />}></Route>
          <Route path='1' element={<ProductDetails />}></Route>
          {/* <Route path='update/'>
            <Route path=':id' element={<ProductDetails />} />
          </Route> */}
        </Route>
        <Route path='laptop/*'>
          <Route path='' element={<LaptopList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
