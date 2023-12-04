import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { useContext } from "react";

const DropDown = () => {
  const navigation = [
    { label: "Edit profile", href: "/", icon: "fas fa-user", onClick: () => {}},
    { label: "Manage stops", href: "/", icon: "fas fa-list-check", onClick: () => {}},
    { label: "Privacy Policy", href: "/", icon: "fas file-shield", onClick: () => {}},
    { label: "Logout", href: "/", icon: "fas fa-right-from-bracket", onClick: () => {
        deleteToken();
    }},
  ];

  const { deleteToken } = useContext(UserContext);

  return (
    <section className=" absolute top-[100%] translate-y-[10px] z-[999] flex left-[-10px]">
      <nav className='contains'>
        <div className='iconbar'>
          <ul className='items'>
            {navigation.map((item, index) => (
              <li
                key={index}
                className="rounded-full text-white flex items-center text-center space-x-2 py-1 px-4 hover:rounded-full hover:bg-white hover:bg-opacity-20"
                onClick={item.onClick}
              >
                <i className={`w-5 ${item.icon}`}/>{" "}
                <Link to={item.href}>
                  <a className="text-white hover:text-indigo-f">{item.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default DropDown;