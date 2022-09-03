
import './App.scss';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './Components/Header/Header.js';
import Home from './Components/Home/Home.js';
import MovieDetail from './Components/MovieDetail/MovieDetail.js';
import PageNotFound from './Components/PageNotFound/PageNotFound.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
   <div className='app'>
    <Router>
      <Header/>
      <div className='container'>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movie/:id' element = {<MovieDetail/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </div>
      <Footer/>
    </Router>
   </div>
  );
}

export default App;
