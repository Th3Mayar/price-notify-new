import React, { useContext } from "react";
import "./notification.css";
import Element from "./elementNotification";
import { UserContext } from "../../context/userContext";

const Notifications = () => {
  const {user} = useContext(UserContext);
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
                {user?.productos &&
                  user.productos.map((element) => {
                    return <Element key={element.id} element={element} />;
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
