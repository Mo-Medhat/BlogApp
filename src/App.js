import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import PostDetails from './Components/PostDetails/PostDetails';
import Footer from './Components/Footer/Footer';

function App() {
  return <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='BlogApp' element={<Home/>}/>
          <Route path="/PostDetails"  element={<PostDetails/>}>
          <Route path=":id"  element={<PostDetails/>} />
        </Route>
        <Route path='/about' element={<About/>}/>

        <Route path='*' element={<><section className='vh-100'>
          <div className='vh-100 d-flex flex-column justify-content-center align-items-center'>
          <h1>Page Not Found</h1>
          <h1>404</h1>
          </div>
          </section></>}/>
      </Routes>
      <Footer/>
  </>
}

export default App;
