import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { UserType } from "../types/userType";

type Token = string | null;

const query = gql`
  query ObtenerUsuario($token: String!) {
    obtenerUsuario(token: $token) {
      id
      nombre
      apellido
      email
      password
      gender
      phone
      address
      productos{
        id
        nombre
        precio
        precioStop
        images
        descripcion
      }
    }
  }
`;

export default function useUser(token: Token) {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);
  const { data, loading: queryLoading } = useQuery(query, {
    variables: {
      token,
    },
  });
  console.log(data);
  useEffect(() => {
    if (data) {
      console.log(data);
      setUser(data.obtenerUsuario);
      setLoading(false);
    }
    if (!queryLoading) {
      setLoading(false);
    }
  }, [data, queryLoading]);
  return { user, setUser, loading, setLoading };
}
