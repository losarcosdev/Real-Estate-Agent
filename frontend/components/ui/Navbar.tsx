import Link from "next/link";
import { motion } from "framer-motion";
import styles from "styles";
import { navVariants } from "utils/motion";

export const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-6 relative w-[70%] mx-auto`}
    >
      {/* NAV CONTAINER */}
      <div
        className={`${styles.innerWidth} px-8 mx-auto flex flex-col justify-between gap-8 md:flex-row`}
      >
        {/* SLOGAN */}
        <Link href={"/"} className={`${styles.heroHeading} text-center`}>
          MF Propiedades
        </Link>
        {/* LINKS */}
        <ul className="flex gap-5 z-50 items-center justify-center">
          <Link className="text-gray-800" href={"/"}>
            Home
          </Link>
          <a className="text-gray-800" href="#services">
            Servicios
          </a>
          <a className="text-gray-800" href="#contact">
            Contacto
          </a>
          <a className="text-gray-800" href="#properties">
            Propiedades
          </a>
        </ul>
      </div>
    </motion.nav>
  );
};
