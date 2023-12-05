import { UserContext } from "../context/userContext";
import { useContext } from "react";
import Home from "./home";
import Dashboard from "./dashboard";

const Content = () => {
  const { user } = useContext(UserContext);
  return <>
    {
        user ? <Home/> : <Dashboard/>
    }
  </>;
};

export default Content;
