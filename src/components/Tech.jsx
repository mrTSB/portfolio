import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <><Intro></Intro><div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <motion.p
            className="text-center text-color-secondary"
          >
            {technology.name}
          </motion.p>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div></>
  );
};

const Intro = () => {
  return (
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
        Some tools and languages I can use...
      </p>
      <br></br>
      <br></br>
    </motion.div>
  )
}

export default SectionWrapper(Tech, "");