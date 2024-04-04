import { Link } from "react-router-dom";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Services from "../Pages/Services";

export default function DefaultNavbar() {
//   let navlinks = [
//     { text: "Home", linkto: "/" },
//     { text: "About", linkto: "/about" },
//     { text: "Services", linkto: "/services" },
//     { text: "Contact", linkto: "/Contact" },
//     { text: "Login", linkto: "/Login" },
//     { text: "Sign up", linkto: "/sign_up" },
//   ];

//   return (
//     <>
//       <div className="p-5 bg-gray-200 fixed w-full rounded-b-lg drop-shadow-2xl">
//         <div className="flex justify-between">
//           <Link to={"/"}>
//             <div className="m-2 flex gap-2 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mr-[1vw] text-blue-800 cursor-pointer">
//               <FontAwesomeIcon icon={faCoins} className="mt-1" />
//               <p className="pacifico-regular font-extrabold">Money Map</p>
//             </div>
//           </Link>
//           <ul className="flex gap-4 items-center">
//             {navlinks.map((nav) => (
//               <Link to={nav.linkto} key={nav.text} className="p-2">
//                 {nav.text}
//               </Link>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="p-16"></div>
//     </>
//   );
// }
return (
  <>
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Project Name */}
        <Link to="/" className="text-white hover:text-gray-300">
          Task Manager
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/Services" className="text-white hover:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/Register" className="text-white hover:text-gray-300">
              Register
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </>
);
}
