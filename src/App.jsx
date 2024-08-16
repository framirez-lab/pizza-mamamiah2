import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './assets/components/Header'
import Home from './assets/components/Home'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'
import Login from './assets/components/Login'
import Register from './assets/components/Register';

function App() {
  return (
    <>
      <div className='contenedor'>
        <Navbar/>
        <Header 
          title={'¡Pizzería Mamma Mia!'}
          subtitle={'¡Tenemos las mejores pizzas que podrás encontrar!'}
        />
        {/* <Home/> */}
        <Login/>
        <Register/>
        <Footer/>

      </div>
    </>
  )
}

export default App
