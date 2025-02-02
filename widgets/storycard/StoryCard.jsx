import { motion } from "framer-motion";
import Card from "./ui/Card";
import Title from "./ui/Title";

const StoryCard = ({ first, second, imageSrc1, imageSrc2 }) => {
  const variants = {
    init: {},
    animate: {
      transition: { staggerChildren: 0.5, delayChildren: 0.3 },
    },
  };

  const boxVariant = {
    init: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <motion.section
      className="w-screen p-10"
      variants={variants}
      initial="init"
      whileInView={"animate"}
      viewport={{ amount: 0.5, once: true }}
    >
      <div className="w-full max-w-screen-lg m-auto">
        <motion.div className="w-full" variants={boxVariant}>
          <Title first={first} second={second} />
        </motion.div>
        <div className="flex gap-10 mt-10">
          <motion.div className="w-full" variants={boxVariant}>
            <Card imageSrc={imageSrc1} />
          </motion.div>
          <motion.div className="w-full" variants={boxVariant}>
            <Card imageSrc={imageSrc2} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default StoryCard;
