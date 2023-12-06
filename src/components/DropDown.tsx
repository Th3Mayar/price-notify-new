import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import React from "react";
const DropDown = () => {
  const navigation = [
    { label: "Edit profile", href: "/configProfile", icon: "fas fa-user", onClick: () => {}},
    { label: "Manage stops", href: "/products", icon: "fas fa-list-check", onClick: () => {}},
    { label: "Privacy Policy", href: "/about", icon: "fas file-shield", onClick: () => {}},
    { label: "Logout", href: "/", icon: "fas fa-right-from-bracket", onClick: () => {
        deleteToken();
    }},
  ];

  const { deleteToken } = useContext(UserContext);

  return (
    <section className="absolute top-[100%] translate-y-[10px] z-[999] flex left-[-10px]">
      <nav className='contains'>
        <div className='iconbar'>
          <ul className='items'>
            {navigation.map((item, index) => (
              <React.Fragment key={index}>
                <li
                  className="rounded-full text-white flex items-center text-center space-x-2 py-1 px-4 hover:rounded-full hover:bg-white hover:bg-opacity-20"
                  onClick={item.onClick}
                >
                  <i className={`w-5 ${item.icon}`}/>{" "}
                  <Link to={item.href} className="text-white hover:text-indigo-f">
                    {item.label}
                  </Link>
                </li>
                {index !== navigation.length - 1 && <hr />}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
  
};

export default DropDown;