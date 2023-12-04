import { Link } from "react-router-dom";

const Navbar = () => {
  const userConfig = [{ label: "Login In", href: "/login" }];

  const navigation = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Blog",
      href: "https://www.youtube.com/channel/UC-20pR6YoAg6XGSjMxuHo4g",
    },
  ];

  return (
    <nav className="py-4 w-full border-b-2 border-indigo-f text-white">
      <div className="container mx-auto flex justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
        >
          <span>PriceNotify</span>
        </Link>

        <div className="flex">
          <ul className="hidden lg:flex items-center space-x-4">
            {navigation.map((item, index) => (
              <li
                key={index}
                className="rounded-full text-white flex items-center text-center space-x-2 py-1 px-4 hover:rounded-full hover:bg-white hover:bg-opacity-20"
              >
                <Link to={item.href} className="text-white hover:text-indigo-">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="hidden lg:flex space-x-4 ml-20">
            {userConfig.map((item, index) => (
              <li
                key={index}
                className="w-full rounded-full border border-indigo-f text-white flex items-center space-x-2 py-1 px-3 hover:rounded-full hover:bg-white hover:bg-opacity-20"
              >
                <i className="w-5 fas fa-user" />{" "}
                <Link to={item.href} className="hover:text-indigo-f">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
