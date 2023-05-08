import type { NextPage } from "next";
import { useEffect } from "react";
import { useCustomSelector, useActions } from "../hooks";
import { Contact, Hero, MainLayout, OurServices, Properties } from "components";

const HomePage: NextPage = () => {
  const { properties } = useCustomSelector((state) => state.properties);
  const { fetchProperties, setUser } = useActions();

  useEffect(() => {
    fetchProperties("");
    setUser();
  }, [fetchProperties, setUser]);

  return (
    <MainLayout
      metaDescription="Encontrá las mejores propiedades en venta y alquiler en Argentina con nuestro agente inmobiliario. Ofrecemos una amplia variedad de opciones para todos los gustos y presupuestos. ¡Visitá nuestro sitio y encontrá tu próximo hogar!"
      metaKeywords="bienes raíces, propiedades en Argentina, alquileres, venta de casas, apartamentos, propiedades exclusivas, asesoramiento inmobiliario, ubicaciones premium, inmobiliaria confiable, servicio de primera calidad"
    >
      <Hero />
      <OurServices />
      <Properties properties={properties} />
      <Contact />
    </MainLayout>
  );
};

export default HomePage;
