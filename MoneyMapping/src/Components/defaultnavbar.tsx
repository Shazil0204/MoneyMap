import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  let navlinks = [
    { text: "Home", linkto: "/" },
    { text: "About", linkto: "/about" },
    { text: "Services", linkto: "/services" },
    { text: "Sign up", linkto: "/sign_up" },
    { text: "Sign in", linkto: "/sign_in" },
  ];

  return (
    <>
      <div className="p-5 bg-gray-200 fixed w-full rounded-b-lg drop-shadow-2xl">
        <div className="flex justify-between">
          <Link to={"/"}>
            <div className="m-2 flex gap-2 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mr-[1vw] text-blue-800 cursor-pointer">
              <FontAwesomeIcon icon={faCoins} className="mt-1" />
              <p className="pacifico-regular font-extrabold">Money Map</p>
            </div>
          </Link>
          <ul className="flex gap-4 items-center">
            {navlinks.map((nav) => (
              <Link to={nav.linkto} key={nav.text} className="p-2">
                {nav.text}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-16"></div>
    </>
  );
}
