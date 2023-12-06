import React, { useContext, useEffect, useState } from "react";
import "./notification.css";
import Element from "./elementNotification";
import { UserContext } from "../../context/userContext";
import { useQuery, gql } from "@apollo/client";
import { Producto } from "../../types/userType";

type Notification = {
  mensaje: string;
  producto: Producto;
  createdAt: string;
  updatedAt: string;
};

const query = gql`
  query ObtenerNotificaciones {
    obtenerNotificaciones {
      mensaje
      producto {
        id
        nombre
        precio
        precioStop
      }
      createdAt
      updatedAt
    }
  }
`;

const Notifications = () => {
  const { token } = useContext(UserContext);
  const [notification, setNotification] = useState<Notification[] | null>(null);
  const { data } = useQuery(query, {
    context: {
      headers: {
        Authorization: token,
      },
    },
  });
  useEffect(() =>{
    if(data && data.obtenerNotificaciones){
      setNotification(data.obtenerNotificaciones);
    }
  },[data])

  return (
    <section className="absolute top-[100%] translate-y-[10px] z-[999] flex right-[-10px] w-[500px] overflow-hidden">
      <nav className="contains overflow-hidden flex w-[100%]">
        <div className="flex w-[100%] scrollbar">
          <ul className="items w-[100%] h-[300px]">
            <li className="text-white py-2 px-6">
              <h2 className="text-white text-center text-xl font-bold">
                Notifications
              </h2>
            </li>
            <li className="py-2 px-6">
              <hr className="border-t border-white border-opacity-50" />
            </li>
            <li className="text-white py-2 px-6">
              <ul className="flex flex-col w-[100%]">
                {notification &&
                  notification.map((element: Notification) => {
                    const { producto } = element;
                    if (!producto) return null;
                    return <Element key={producto.id} element={producto} date = {element.createdAt} />;
                  })}
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Notifications;
