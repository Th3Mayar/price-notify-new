import Login from "../components/Login/SignIn/Login";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);
  console.log(user);
  return (
    <>
      <Login />
    </>
  );
}
