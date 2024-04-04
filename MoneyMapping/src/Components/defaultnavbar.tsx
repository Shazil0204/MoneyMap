import { Link } from "react-router-dom";
import { faCoins, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DefaultNavbar() {
  let navlinks = [
    { text: "Home", linkto: "/" },
    { text: "About", linkto: "/about" },
    { text: "Services", linkto: "/services" },
    { text: "Contact", linkto: "/Contact" },
    { text: "Login", linkto: "/Login" },
    { text: "Register", linkto: "/Register" },
  ];

  return (
    <>
      <div className="p-5 bg-gray-200 fixed w-full rounded-b-lg drop-shadow-2xl z-10">
        <div className="flex justify-between">
          <Link to={"/"}>
            <div className="m-2 flex gap-2 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-3xl mr-[1vw] text-blue-800 cursor-pointer">
              <FontAwesomeIcon icon={faCoins} className="mt-1" />
              <p className="pacifico-regular font-extrabold">Money Map</p>
            </div>
          </Link>
          <div className="hidden lg:block">
            <ul className="flex gap-4 items-center text-2xl">
              {navlinks.map((nav) => (
                <Link to={nav.linkto} key={nav.text} className="p-2">
                  {nav.text}
                </Link>
              ))}
            </ul>
          </div>
          <div className="lg:hidden flex items-center justify-center">
            {/* <FontAwesomeIcon icon={faBars} /> */}
            <ul className=" gap-4 flex flex-col items-center text-2xl">
              {navlinks.map((nav) => (
                <Link to={nav.linkto} key={nav.text} className="p-2">
                  {nav.text}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="p-16"></div>
    </>
  );
}

