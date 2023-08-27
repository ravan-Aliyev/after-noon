import { motion as m } from "framer-motion";

const pageVariants = {
  init: { opacity: 0 },
  ani: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 1 } },
};

function AniPage(props) {
  return (
    <m.div
      variants={pageVariants}
      initial="init"
      animate="ani"
      exit="exit"
      transition={{ duration: 1.5 }}
    >
      {props.children}
    </m.div>
  );
}

export default AniPage;
