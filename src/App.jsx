import { Routes } from 'react-router';
import { Route } from 'react-router-dom';
import Movies from './components/Movies/Movies';
import Series from './components/Series/Series';
import Favorites from './components/Favorites/Favorites';
import Home from './components/Home/Home';
import Layout from './components/layouts';
import '@fontsource/roboto/300.css';
const App = () => {
  return ( 
    <Routes>
    <Route path="/" element={<Layout />} >
      <Route index element={<Home />} ></Route>
      <Route path="movies" element={<Movies />} ></Route>
      <Route path="series" element={<Series />} ></Route>
      <Route path="favorites" element={<Favorites />} ></Route>
    </Route>
    
  </Routes>
   );
}
 
export default App;