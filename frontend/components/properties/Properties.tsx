import { fadeIn } from "utils/motion";
import { motion } from "framer-motion";
import PropertiesList from "./PropertiesList";
import { ChangeEvent, useState, useEffect } from "react";
import { TypingText } from "components/ui";
import { IProperties } from "../../state/interfaces/interfaces";
import { useActions } from "hooks";

const propertiesButtonStyle =
  "p-[10px] shadow-lg shadow-gray-100 transition-all duration-150";

interface Props {
  properties: IProperties[];
}

export const Properties = ({ properties }: Props) => {
  const { fetchProperties } = useActions();
  const [stateProperties, setStateProperties] = useState<IProperties[]>([]);
  const [selectedOperation, setSelectedOperation] = useState<string>("");
  const [filteredProperties, setFilteredProperties] = useState<IProperties[]>(
    []
  );

  // Al cambiar la variable `properties`, se actualiza el estado local `stateProperties`
  useEffect(() => {
    setStateProperties(properties);
  }, [properties]);

  // Este efecto se encarga de aplicar el filtro de operaciones y actualizar `filteredProperties` en consecuencia
  // Si `selectedOperation` es vacío, `filteredProperties` será igual a `stateProperties`
  useEffect(() => {
    if (selectedOperation) {
      // Si hay una operación seleccionada...
      const filteredProperties = stateProperties.filter(
        (property) => property.operation === selectedOperation
      );
      setFilteredProperties(filteredProperties);
    } else {
      // Si no hay operación seleccionada...
      setFilteredProperties(stateProperties); // `filteredProperties` es igual a `stateProperties`
    }
  }, [selectedOperation, stateProperties]); // Este efecto se ejecuta cada vez que cambia `selectedOperation` o `stateProperties`

  // Este manejador de evento se encarga de actualizar el estado `selectedOperation` cada vez que se selecciona una operación en el filtro
  const handleOperation = ({ target }: any) => {
    const value = target.value;
    setSelectedOperation(value); // Actualizamos el estado `selectedOperation` con el valor seleccionado
  };

  // Este manejador de evento se encarga de enviar una petición al servidor cada vez que se selecciona una opción en el filtro de ordenamiento
  const handleSelect = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const value = target.value;
    fetchProperties(`${value}`);
  };

  return (
    <section className="mt-[100px] min-h-[90vh]" id="properties">
      <TypingText textStyles="text-center" title="| Propiedades" />
      <motion.h3
        initial="hidden"
        whileInView="show"
        variants={fadeIn("up", "spring", 0.5, 1)}
        viewport={{ once: true }}
        className="font-semibold gradient-title text-center text-[35px] md:text-[50px]"
      >
        Propiedades
      </motion.h3>
      {/* Container */}
      <div>
        {/* Filters */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn("up", "spring", 0.8, 1)}
          viewport={{ once: true }}
          className="flex my-14 items-center justify-center gap-3 z-50 flex-wrap"
        >
          <button
            className={`${propertiesButtonStyle} ${
              selectedOperation === "alquiler"
                ? "bg-blue-800 text-slate-100"
                : "bg-gray-50 text-slate-800"
            }`}
            value="alquiler"
            onClick={(e) => handleOperation(e)}
          >
            Alquiler
          </button>
          <button
            className={`${propertiesButtonStyle} ${
              selectedOperation === "venta"
                ? "bg-blue-800 text-slate-100"
                : "bg-gray-50 text-slate-800"
            }`}
            value="venta"
            onClick={(e) => handleOperation(e)}
          >
            Venta
          </button>
          <button
            className={`${propertiesButtonStyle} ${
              selectedOperation === ""
                ? "bg-blue-800 text-slate-100"
                : "bg-gray-50 text-slate-800"
            }`}
            value=""
            onClick={(e) => handleOperation(e)}
          >
            Todos
          </button>
          <select
            disabled={!filteredProperties.length}
            name=""
            id=""
            className={`${propertiesButtonStyle} ${
              !filteredProperties.length
                ? "bg-gray-300 opacity-20"
                : "cursor-pointer bg-gray-50"
            }`}
            onChange={handleSelect}
          >
            <option value="" disabled>
              Filtrar
            </option>
            <option value="order_title=asc">A-Z</option>
            <option value="order_title=desc">Z-A</option>
            <option value="order_price=asc">Precio: Menor a Mayor</option>
            <option value="order_price=desc">Precio: Mayor a Menor</option>
          </select>
        </motion.div>
        {/* PropertiesListContainer */}
        {!filteredProperties.length ? (
          <h1 className="text-center">
            No se encontraron propiedades,cambia el parámetro de búsqueda.
          </h1>
        ) : (
          <PropertiesList properties={filteredProperties} />
        )}
      </div>
    </section>
  );
};

export default Properties;
