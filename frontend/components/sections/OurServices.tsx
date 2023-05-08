import { motion } from "framer-motion";
import { staggerContainer } from "utils";
import { TypingText, TitleText } from "../ui";
import styles from "styles";
import { ourServices } from "constants/constants";

export const OurServices = () => {
  return (
    <section id="services" className="md:h-[100vh] mt-[50px]">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Servicios" textStyles="text-center" />
        <TitleText title="Servicios" textStyles="text-center" />
      </motion.div>
      <div className="flex flex-col lg:flex-row items-center justify-between w-[80%] mx-auto my-[100px] gap-5">
        {ourServices.map(({ contact, description, service }) => (
          <figure
            key={service}
            className="flex flex-col gap-5 bg-gray-100 shadow-lg shadow-gray-100 p-5"
          >
            <h3 className="font-semibold text-gray-800 text-[24px]">
              {service}
            </h3>
            <p>{description}</p>
            <a
              href="#contact"
              className="bg-blue-800 p-3 w-fit rounded-md font-semibold text-gray-100 hover:bg-blue-700 transition-all duration-300"
            >
              {contact}
            </a>
          </figure>
        ))}
      </div>
    </section>
  );
};
