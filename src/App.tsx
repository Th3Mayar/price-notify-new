import "./App.css";
import Content from './page/content';
import NavBar from "./components/Navbar/index";
import Login from "./page/login";
import Register from "./page/register";
import Products from "./page/products";
import About from './page/about';
import ConfigProfile from './page/configProfile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer"; 

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route>
            <Route path="/" element={<Content />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/configProfile" element={<ConfigProfile />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
