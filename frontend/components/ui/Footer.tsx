import styles from "styles";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-400 w-[90%] mx-auto p-10 flex text-gray-800 items-center justify-evenly flex-col md:flex-row gap-5">
      <div>
        <h4 className={`${styles.heroHeading} text-[24px]`}>MF Propiedades</h4>
      </div>
      <div>
        <span className="text-center">
          Copyright&copy;2022 - 2023. Todos los derechos reservados.
        </span>
      </div>
      <div className="flex p-1 text-white">
        <button className="p-3 bg-[#02418f] hover:bg-[#0c223c] duration-150 rounded-l-md">
          <i className="bi bi-instagram" />
        </button>
        <button className="p-3 bg-[#02418f] hover:bg-[#0c223c] duration-150">
          <i className="bi bi-whatsapp" />
        </button>
        <button className="p-3 bg-[#02418f] hover:bg-[#0c223c] duration-150">
          <i className="bi bi-facebook" />
        </button>
        <button className="p-3 bg-[#02418f] hover:bg-[#0c223c] duration-150 rounded-r-md">
          <i className="bi bi-envelope" />
        </button>
      </div>
    </footer>
  );
};
