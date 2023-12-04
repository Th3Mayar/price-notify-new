import { useNavigate } from "react-router-dom";
import Register from "../components/Login/SignUp/Register";
import { UserContext } from "../context/userContext";
import { useContext, useEffect } from "react";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);
  return (
    <>
      <Register />
    </>
  );
}
