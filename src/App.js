import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Nav from "./components/Nav";
import ProductList from "./pages/ProductList";
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/login' element={<Login />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
