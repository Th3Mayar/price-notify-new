import { useState } from "react";
import DropDown from "../../DropDown";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import { useContext } from "react";

const NavbarConfig = () => {
  const notification = [{ label: " ", href: "/notification" }];
  const [isVisible,setIsVisible] = useState(false)
  const { user } = useContext(UserContext);
  const handleLinkClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div>
        <nav
         className="py-4 w-full border-b-2 border-indigo-f text-white">
          <div className="container mx-auto flex items-left ">
            <Link className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100" to="/">
                <span>PriceNotify</span>
            </Link>
            <div className="mx-auto flex items-left mr-10 max-w-wd">
              <ul className="hidden lg:flex space-x-4 ml-20">
                <li 
                onClick={handleLinkClick}
                className="w-full relative rounded-full border border-indigo-f text-white flex items-center space-x-2 py-1 px-3 hover:rounded-full hover:bg-white hover:bg-opacity-20">
                  <i className="w-5 fas fa-user" />
                  <button
                    onClick={()=>{
                    }}
                    className="hover:text-indigo-f"
                  >
                    {
                    user?.nombre && user.apellido ? user?.nombre + " " + user?.apellido : "Undefined"
                    
                    }
                    
                  </button>
                  {
                    isVisible && <DropDown/>
                  }
                </li>
              </ul>
              <ul className="hidden lg:flex items-center space-x-2 ml-2">
                {notification.map((item, index) => (
                  <li
                    key={index}
                    className="w-full rounded-full border border-indigo-f text-white flex items-center space-x-2 py-1 px-3 hover:rounded-full hover:bg-white hover:bg-opacity-20"
                  >
                    <Link to ={item.href} className="hover:text-indigo-f">
                        {item.label}
                        <i className="w-5 fas fa-bell" />{" "}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarConfig;