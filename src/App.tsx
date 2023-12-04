import "./App.css";
import Dashboard from "./page/dashboard";
import NavBarOut from "./components/Navbar/navbarOut";
import Login from "./components/Login/SignIn/Login";
import Register from "./components/Login/SignUp/Register";
import Products from "./page/products";
import About from './page/about';
import ConfigProfile from './page/configProfile';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarOut />
        <Routes>
          <Route>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/configProfile" element={<ConfigProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
