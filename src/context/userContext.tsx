import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  ReactNode,
} from "react";
import useUser from "../hooks/useUser";
import useToken from "../hooks/useToken";
import { UserType, Token } from "../types/userType";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextProps {
  setToken: unknown;
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  deleteToken: () => void;
  token: Token | null;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
  loading: false,
  setLoading: () => {},
  token: null,
  setToken: () => {},
  deleteToken: () => {},
});

export default function UserProvider({ children }: UserProviderProps) {
  const { token, setToken, deleteToken } = useToken();
  const { user, setUser, loading, setLoading } = useUser(token);
  useEffect(() => {
    if (!token) {
      setUser(null);
    }
  }, [token]);

  useEffect(() => {
    if (!loading && !user && token) {
      deleteToken();
    }
  }, [loading, user]);

  useEffect(() => {
    if (localStorage.getItem("Authorization")) {
      setToken(localStorage.getItem("Authorization"));
    }
  }, []);
  console.log(user);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        token,
        setToken,
        deleteToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
