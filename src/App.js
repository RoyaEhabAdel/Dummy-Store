import './App.css';
import Home from './components/Home';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Products from './components/Products';
import Details from './components/Details';


function App() {
  return <BrowserRouter>

    <Routes>
    <Route index element={<Home />} />
      <Route path='/products' element={<Products/>} />
      <Route path='/products/:id' element={<Details/>}  />
    </Routes>
  </BrowserRouter>;
}

export default App;
