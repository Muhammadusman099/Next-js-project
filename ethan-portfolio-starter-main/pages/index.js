// next image
import Image from "next/image";

// componets
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full ">
      {/* text*/}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black-30 to-black/10">
        <div className=" flex flex-col justify-center  xl:pt-20 xl:text-left h-full container mx-auto">
          {/* title */}
          <h1 className="h1 sm-mt-20">
            Transforming Ideas <br /> Into{""}
            <span className="text-accent">Digital Reality</span>
          </h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl max-auto xl:mx-0 mb-10"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            maxime aut corrupti possimus reprehenderit numquam molestias
            corporis esse facere quo!
          </motion.p>
          {/* BTN */}
          <div className=" xl:hidden">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* Image*/}
      <div>image</div>
    </div>
  );
};

export default Home;
