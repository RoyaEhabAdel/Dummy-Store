import './App.css';
import Home from './components/Home';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Products from './components/Products';



function App() {
  return <BrowserRouter>

    <Routes>
    <Route index element={<Home />} />
      <Route path='/products' element={<Products/>} />
    </Routes>
  </BrowserRouter>;
}

export default App;
