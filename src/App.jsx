import "bootstrap/dist/css/bootstrap.min.css"
import { About, Contact, Home, Menu, NotFoundPage} from './pages';
import { Routes, Route } from 'react-router-dom';
import { Footer, NavBar } from "./components";

function App() {
  

  return (
    <>

      <NavBar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>

      <Footer/>


    </>
  )
}

export default App
