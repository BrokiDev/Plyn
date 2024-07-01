import { useState, useEffect } from "react";
import { useLogout } from "../../../providers/auth/signout";

interface SideBarProps {
  children?: React.ReactNode;
  title: string;
  items?: Array<{
    name: string;
    icon: string;
    path: string;
    onClick?: () => void;
  }>;
}

const SideBar: React.FC<SideBarProps> = ({ items, title, children }) => {
  const [toolbar, setToolbar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const pathname = window.location.pathname;
  const active = items?.find((item) => item.path === pathname);

  const dropdownOptions = [
    {
      name: "profile",
      icon: "fa fa-user",
    },
    {
      name: "settings",
      icon: "fa fa-cog",
    },
    {
      name: "logout",
      icon: "fa fa-sign-out",
    },
  ];

  const showToolbar = () => setToolbar(!toolbar);

  const { mutateAsync } = useLogout();
  const handleLogout = async () => {
    try {
      const data = await mutateAsync();
      if (data.status === "success") {
        window.location.href = "/auth/sign-in";
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setToolbar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex">
      <div className="relative">

      <div
        className={` absolute top-0 left-0 w-56 h-screen bg-gray-800 z-20  transition-transform duration-300 ease-in-out   md:static`}
      >
        <div className="flex justify-between items-center bg-gray-800 p-4">
          <h1
            className={`text-2xl text-white ${
              toolbar ? "block" : "hidden"
            } md:block`}
          >
            {title}
          </h1>
          <i
            className={`fa-solid ${
              toolbar ? "fa-times" : "fa-bars"
            } text-2xl text-white cursor-pointer`}
            onClick={showToolbar}
          ></i>
        </div>
        <div className="flex flex-col gap-4 p-4">
          {items &&
            items.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 cursor-pointer ${
                  active?.path === item.path ? "text-white" : "text-slate-400"
                }`}
              >
                <i className={`fa-solid fa-${item.icon} text-white`}></i>
                <a href={item.path}>{item.name}</a>
              </div>
            ))}
        </div>
      </div>
      </div>

      {/* Contenedor principal con transición de margen */}
      <div
        className={`flex-1 transition-all duration-300 ${
          toolbar ? "ml-56" : "ml-0"
        }`}
      >
        <div className="flex justify-between bg-gray-800 p-6">
          <div className="flex items-center gap-4">
            {!toolbar && (
              <>
                <i
                  className={`fa-solid fa-bars text-2xl text-white cursor-pointer md:hidden`}
                  onClick={showToolbar}
                ></i>
                <h1 className="text-2xl text-white md:hidden">{title}</h1>
              </>
            )}
          </div>
          <div className="flex items-center gap-5">
            <i className="fa-solid fa-bell text-2xl text-white cursor-pointer"></i>
            <div className="relative pr-1">
              <i
                className="fa-solid fa-user text-2xl text-white cursor-pointer"
                onClick={() => setDropdown(!dropdown)}
              ></i>
              <div
                className={`absolute top-12 right-0 bg-gray-800 p-2 rounded-md text-white ${
                  dropdown ? "block" : "hidden"
                }`}
              >
                {dropdownOptions.map((option, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-gray-700 cursor-pointer"
                  >
                    {option.name === "logout" ? (
                      <div className="flex gap-2 items-center">
                        <i className={`${option.icon} text-white`}></i>
                        <span onClick={handleLogout}>
                          {option.name.charAt(0).toUpperCase() +
                            option.name.slice(1)}
                        </span>
                      </div>
                    ) : (
                      <div className="flex gap-2 items-center">
                        <i className={`text-white fa-solid ${option.icon}`}></i>
                        <a href={option.name}>
                          {option.name.charAt(0).toUpperCase() +
                            option.name.slice(1)}
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default SideBar;
