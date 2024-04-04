// import transition from "../Components/Transition";
// import ads from "../../public/ads.gif";

// function Home() {
//   return (
//     <div className="h-screen flex justify-center items-center">
//       hello
//       <div className="absolute top-40 right-0">
//         <img src={ads} className="w-auto "></img>
//       </div>
//     </div>
//   );
// }

// export default transition(Home);

import { useState, useEffect } from "react";
import transition from "../Components/Transition";
import ads from "../../public/ads.gif";

function Home() {
  const [showAds, setShowAds] = useState(false);

  useEffect(() => {
    // Delay showing the ads for 3 seconds (adjust as needed)
    const delay = setTimeout(() => {
      setShowAds(true);
    }, 4000);

    // Cleanup function to clear the timeout if component unmounts before the delay completes
    return () => clearTimeout(delay);
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="w-4/5 absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-center text-[10vw] font-medium leading-none uppercase">
        Home
      </h1>
      {showAds && (
        <div className="absolute top-40 right-0">
          <img src={ads} className="w-auto z-100" alt="Advertisement" />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://google.blog";
            }}
            className="absolute p-1 bg-black top-[13rem] right-[9.5rem] min-w-[8.85rem] min-h-[2.5rem] bg-gradient-to-b from-white to-[#adadad]"
          >
            <strong>Of Course</strong>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://google.uk/";
            }}
            className="absolute p-1 bg-black top-[13rem] right-[0.3rem] min-w-[8.85rem] min-h-[2.5rem] bg-gradient-to-b from-white to-[#adadad]"
          >
            <strong>Maybe</strong>
          </button>
        </div>
      )}
    </div>
  );
}

export default transition(Home);
