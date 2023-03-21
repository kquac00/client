import ProductForm from './components/ProductForm';
import './App.css';
import { Main } from './views/Main';
import { Routes, Route } from 'react-router-dom'
import CreateProduct from './views/CreateProduct';
import ProductShowOne from './views/ProductShowOne';
import UpdateProduct from './views/UpdateProduct';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='form'>
      <p>
        <Link to="/ProductManager/new">Form to create a product</Link>
        </p>
        <p>
        <Link to="/ProductManager">Back to Dashboard/Main</Link>
      </p>
      <Routes>
        <Route path="/ProductManager" element={<Main />} />
        <Route path="/ProductManager/new" element={<CreateProduct />} />
        <Route path="/ProductManager/:id" element={<ProductShowOne />} />
        <Route path="/ProductManager/:id/edit" element={<UpdateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
