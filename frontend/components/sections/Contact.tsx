import { motion } from "framer-motion";
import { fadeIn } from "utils";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    //Aquí iría la lógica para enviar el email
    toast.success("Email enviado correctamente", {
      autoClose: 2000,
      position: "bottom-center",
    });
    console.log({ data });
    reset();
  };

  const defaultMessage = "¡Hola! ¿Cómo estás?,me interesa la propiedad:";

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${
    process.env.NEXT_PUBLIC_PHONE_NUMBER
  }&text=${encodeURIComponent(defaultMessage)}`;

  const email = "mirtasf@remax.com.ar"; // Reemplaza con la dirección de correo electrónico del destinatario
  const subject = "Asunto del correo electrónico"; // Reemplaza con el asunto predefinido del correo electrónico
  const body = "Cuerpo del correo electrónico"; // Reemplaza con el cuerpo predefinido del correo electrónico
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      id="contact"
      className="mt-[50px] h-[120vh] flex flex-col gap-6"
    >
      <ToastContainer />
      <h3 className="font-semibold text-center text-[35px] md:text-[50px] gradient-title">
        Contáctanos!
      </h3>
      <p className="text-center text-gray-600">
        Completa el formulario o contáctame en mis redes sociales.
      </p>
      {/* Links */}
      <div className="flex items-center justify-center flex-wrap gap-3">
        {/* Whatsapp link */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-green-400 flex gap-1 hover:bg-green-600 duration-150 w-[120px] text-white rounded-sm border-none"
        >
          <i className="bi bi-whatsapp" />
          Whatsapp
        </a>
        {/* Instagram link */}
        <a
          href="https://www.instagram.com/mirta.remax/?utm_source=qr"
          rel="noopener noreferrer"
          target="_blank"
          className="p-2 bg-gradient-to-r hover:filter hover:brightness-75 duration-150 from-pink-500 via-purple-500 to-indigo-500 flex gap-1 w-[120px] text-white rounded-sm border-none"
        >
          <i className="bi bi-instagram" />
          Instagram
        </a>
        {/* Facebook link */}
        <a
          href="https://www.facebook.com/mirta.remaxhabitat?mibextid=LQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-500 hover:bg-blue-600 duration-150 flex gap-1 w-[120px] text-white rounded-sm border-none"
        >
          <i className="bi bi-facebook" />
          Facebook
        </a>
        {/* Gmail link */}
        <a
          href={mailtoUrl}
          target="_blank"
          className="p-2 bg-red-700 flex hover:bg-red-900 duration-150 gap-1 w-[120px] text-white rounded-sm border-none"
        >
          <i className="bi bi-envelope" />
          Gmail
        </a>
      </div>
      <form
        className="flex flex-col items-center justify-center gap-5 p-3 w-[100vw] md:w-[73%] mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-5 w-full md:flex-row">
          <div className="w-full relative py-3">
            <input
              className={` bg-gray-100 p-5 w-full text-gray-800 ${
                errors.name && "border-red-500"
              }`}
              type="text"
              placeholder="John Doe"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 absolute top-15 text-[14px]">
                Este campo es obligatorio
              </p>
            )}
          </div>
          <div className="w-full relative py-3">
            <input
              className={` bg-gray-100 p-5 w-full text-gray-800 ${
                errors.email && "border-red-500"
              }`}
              type="text"
              placeholder="tu@email.com"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <p className="text-red-500 absolute top-15 text-[14px]">
                Este campo es obligatorio y debe ser un email válido.
              </p>
            )}
          </div>
        </div>
        <div className="pb-3 w-full relative">
          <textarea
            className={` bg-gray-100 w-full text-gray-800 h-[250px] p-5 active:border-none resize-none  ${
              errors.message && "border-red-500"
            }`}
            placeholder="Hola me interesa..."
            {...register("message", { required: true })}
          />
          {errors.message && (
            <p className="text-red-500 absolute top-15 text-[14px]">
              Este campo es obligatorio
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-900 hover:bg-blue-800 transition-all duration-300 text-center p-5 w-full font-semibold text-white"
        >
          Contactar
        </button>
      </form>
    </motion.section>
  );
};
