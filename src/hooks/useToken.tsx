import { useState } from "react";
type Token = string | null;

type UseTokenReturnType = {
  setToken: (token: Token | null) => void;
  token: Token;
  deleteToken: () => void;
};

export default function useToken(): UseTokenReturnType {
  // este hook trata de recuperar el token del localStorage y si no lo encuentra devuelve null
  const getToken = () => {
    const token = localStorage.getItem("Authorization");

    return token || null;
  };

  const [token, setToken] = useState<Token>(getToken());

  const saveToken = (token: Token | null) => {
    if (token !== null && token !== undefined) {
      localStorage.setItem("Authorization", token);
      setToken(token);
    }
  };

  const deleteToken = () => {
    localStorage.removeItem("Authorization");
    setToken(null);
  };

  return {
    setToken: saveToken,
    token,
    deleteToken,
  };
}
