import NavbarConfig from "./navbarConfig/navbar";
import NavbarOut from "./navbarOut/navbarOut";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

const Navbar = () => {
  const { user } = useContext(UserContext);
  return <>{user ? <NavbarConfig /> : <NavbarOut />}</>;
};

export default Navbar;