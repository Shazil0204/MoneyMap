import { Link } from "react-router-dom";
import { faCoins, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function DefaultNavbar() {
  let navlinks = [
    { text: "Home", linkto: "/" },
    { text: "About", linkto: "/about" },
    { text: "Services", linkto: "/services" },
    { text: "Contact", linkto: "/Contact" },
    { text: "Login", linkto: "/Login" },
    { text: "Register", linkto: "/Register" },
  ];

  const location = useLocation();

  const [navOptionsVisible, setNavOptionsVisible] = useState(false);

  const toggleNavOptions = () => {
    setNavOptionsVisible(!navOptionsVisible);
  };

  return (
    <>
      <div className="p-5 bg-gray-200 fixed w-full rounded-b-lg drop-shadow-2xl z-10">
        <div className="flex justify-between">
          <Link to={"/"} onClick={toggleNavOptions}>
            <div className="m-2 xl:px-10 flex gap-2 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-3xl mr-[1vw] outline-dashed outline-4 bg-yellow-300 p-2 text-green-700 cursor-pointer">
              <FontAwesomeIcon icon={faCoins} className="mt-1" />
              <p className="pacifico-regular font-extrabold">MoneyMap</p>
            </div>
          </Link>
          {!navOptionsVisible && (
            <button id="navBarBTN" onClick={toggleNavOptions}>
              <FontAwesomeIcon
                className="sm:text-xl md:text-2xl block lg:hidden"
                icon={faBars}
              />
            </button>
          )}
          <ul
            id="nav-options"
            className={`${
              navOptionsVisible
                ? "flex flex-col lg:flex-row"
                : "hidden lg:flex flex-col lg:flex-row"
            } gap-4 items-center text-2xl`}
          >
            {navlinks.map((nav) => (
              <Link
                to={nav.linkto}
                key={nav.text}
                className={`p-2 min-w-[7rem] text-center rounded-lg border border-gray-400 drop-shadow-lg hover:scale-90 duration-300 ${
                  nav.linkto === location.pathname
                    ? "bg-blue-300 -rotate-12 outline-2 outline-dotted outline-indigo-500"
                    : "bg-gray-300 rotate-3"
                }`}
                onClick={toggleNavOptions}
              >
                {nav.text}
              </Link>
            ))}
            <div className="lg:hidden">
              {navOptionsVisible && (
                <button id="navBarBTN" onClick={toggleNavOptions}>
                  <FontAwesomeIcon
                    className="sm:text-xl md:text-2xl block lg:hidden text-red-500 bg-gray-300 p-2 text-center rounded-lg border border-gray-400 drop-shadow-lg hover:scale-90 duration-150"
                    icon={faTimes}
                  />
                </button>
              )}
            </div>
          </ul>
        </div>
      </div>
      {/* <div className="p-16"></div> */}
    </>
  );
}
