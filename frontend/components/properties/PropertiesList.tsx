import { fadeIn } from "utils";
import { motion } from "framer-motion";
import { PropertyCard } from ".";
import { IProperties } from "../../state";

interface Props {
  properties: IProperties[];
}

const PropertiesList = ({ properties }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={fadeIn("up", "spring", 1, 1)}
      viewport={{ once: true }}
      className="flex gap-20 flex-wrap items-center justify-center w-[90%] mx-auto"
    >
      {properties &&
        properties.map((property) => (
          <PropertyCard property={property} key={property.id} />
        ))}
    </motion.div>
  );
};

export default PropertiesList;
