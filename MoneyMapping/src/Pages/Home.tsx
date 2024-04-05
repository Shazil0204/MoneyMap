import { Link } from "react-router-dom";
import transition from "../Components/Transition";
import "../Styles/googleFont.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowAltCircleDown,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
      <div className="h-full w-full">
        <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      </div>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <p className="text-center text-[5vh] md:text-[5vw] oxygen-light">
          <strong>
            Empower Your <span className="text-teal-500">Finances</span> with{" "}
            <span className="text-indigo-500 font-serif"> MoneyMap</span>
          </strong>
        </p>
        <p className="px-[8vw] text-justify font-mono text-[2vh] md:text-[1.5vw]">
          MoneyMap is your ultimate financial companion, designed to streamline
          your money management tasks effortlessly. With MoneyMap, you can take
          control of your finances like never before. Easily add incomes,
          savings, loans, subscriptions, and transactions with just a few
          clicks. Gain valuable insights into your spending habits and financial
          health with comprehensive budget overviews and intuitive charts. Start
          your journey towards financial freedom today with MoneyMap. For morw
          information{" "}
          <a className="hover:text-green-700 duration-100" href="">
            <FontAwesomeIcon icon={faArrowAltCircleDown} />
          </a>
        </p>
        <Link to={"/Login"}>
          <button className="mt-8 p-2 text-2xl bg-emerald-300 rounded-lg hover:scale-125 duration-200 hover:-rotate-6 hover:bg-emerald-700 hover:text-white group">
            Get started{" "}
            <FontAwesomeIcon
              className="text-amber-800 group-hover:text-white duration-200"
              icon={faArrowAltCircleRight}
            />{" "}
          </button>
        </Link>
      </div>
    </>
  );
}

export default transition(Home);
