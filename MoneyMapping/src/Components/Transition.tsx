import { motion } from "framer-motion";

const Transition = (OgComponent: React.ComponentType<any>) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="fixed top-0 left-0 w-full h-full transform origin-top bg-indigo-50"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-full transform origin-top bg-indigo-50"
        // style={{ backgroundImage: `url(${bgPng})` }} // Use the imported image
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default Transition;
