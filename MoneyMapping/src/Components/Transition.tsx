import { motion } from "framer-motion";
import backgroundGif from "../../public/gay.gif";
import backgroundGif1 from "../../public/doublepica.gif";

const Transition = (OgComponent: React.ComponentType<any>) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="fixed top-0 left-0 w-full h-full transform origin-top bg-cover bg-black"
        // style={{ backgroundImage: `url(${backgroundGif1})` }} // Use the imported image
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-full transform origin-top bg-cover bg-black"
        // style={{ backgroundImage: `url(${backgroundGif})` }} // Use the imported image
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default Transition;
