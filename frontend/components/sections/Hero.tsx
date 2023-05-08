import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "utils";

export const Hero = () => {
  return (
    <section className=" md:h-[90vh] flex flex-col lg:flex-row items-center justify-center gap-[100px]">
      <div>
        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={textVariant(1.1)}
          className="mb-5 font-extrabold text-[35px] md:text-[50px] text-center gradient-title"
        >
          Compra,Vende o <br /> Alquila
        </motion.h1>

        <motion.figure
          variants={fadeIn("right", "tween", 1.5, 1.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-xl p-8 bg-gray-100 shadow-xl shadow-gray-100 w-[340px] md:w-[500px] mt-10 relative mx-auto lg:mx-0"
        >
          <div>
            <Image
              className="w-28 h-28 rounded-full mx-auto"
              src="/agent-img.jpg"
              alt=""
              width="425"
              height="550"
            />
          </div>
          <div className="pt-6 text-center space-y-4">
            <blockquote className="text-center">
              <p className="text-lg font-light text-gray-400 text-[14px] text-center md:text-left">
                Agente inmobiliario especializado en compra, venta y alquiler de
                propiedades. Ayudo a mis clientes a negociar precios y
                condiciones, brindo asesoramiento y encuentro lugares para
                alquilar o inquilinos para propiedades.
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-blue-800">Mirta Farias</div>
              <div className="text-gray-700 font-semibold">
                Agente inmobiliario,Argentina
              </div>
            </figcaption>
          </div>
        </motion.figure>
      </div>
      <motion.div
        variants={fadeIn("left", "tween", 1.5, 1.1)}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
      >
        <Image
          className="w-[500px] h-[500px] rounded-3xl hidden lg:flex"
          alt="House 1"
          src={"/ilustrative-image.jpg"}
          height={"500"}
          width={"500"}
        />
      </motion.div>
    </section>
  );
};
