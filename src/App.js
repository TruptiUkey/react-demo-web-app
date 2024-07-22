import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/Company'
import Sale from './Pages/Sale'
import MenuItems from './Pages/Products';
import Layout from './Pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/sale' element={<Sale/>}/>
            <Route path='/products' element={<MenuItems/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
