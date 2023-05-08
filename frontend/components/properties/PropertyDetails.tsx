import { uppercaseFirstLetter, format } from "utils";
import { IProperty } from "../../state/interfaces/interfaces";

interface Props {
  property: IProperty;
}

const PropertyDetails = ({ property }: Props) => {
  const {
    address,
    antiquity,
    bathrooms,
    bedrooms,
    coveredArea,
    description,
    operation,
    price,
    rooms,
    title,
    totalArea,
    type,
  } = property;

  return (
    <div className="flex flex-col text-gray-800 p-3 gap-5 lg:grid lg:grid-cols-2 lg:w-[1125px] lg:mx-auto lg:min-h-[400px]">
      <div className="bg-gray-100 p-3 flex flex-col gap-5 rounded-md">
        <div className="flex gap-3">
          <a
            className="bg-blue-800 p-3 w-fit rounded-md font-semibold text-gray-100 hover:bg-blue-700 transition-all duration-300"
            href="#contact"
          >
            Contactar
          </a>
          <span className=" border border-blue-800 p-3 w-fit rounded-md font-semibold gradient-title">
            {uppercaseFirstLetter(operation)}
          </span>
          <span className=" border border-blue-800  p-3 w-fit rounded-md font-semibold gradient-title">
            {uppercaseFirstLetter(type)}
          </span>
        </div>
        <h1>{title}</h1>
        <div className="flex flex-wrap gap-2">
          <p className="p-3 bg-gray-400 text-gray-100 rounded-md">
            Antiguedad: {antiquity} {antiquity > 1 ? "años" : "año"}
          </p>
          <p className="p-3 bg-gray-400 text-gray-100 rounded-md">
            Baños: {bathrooms}
          </p>
          <p className="p-3 bg-gray-400 text-gray-100 rounded-md">
            M² Cubiertos: {coveredArea}
          </p>
          <p className="p-3 bg-gray-400 text-gray-100 rounded-md">
            M² Totales: {totalArea}
          </p>
          <p className="p-3 bg-gray-400 text-gray-100 rounded-md">
            Ambientes: {rooms}
          </p>
          {bedrooms && (
            <p className="p-3 bg-gray-400 text-gray-100 rounded-md">
              Habitaciones: {bedrooms}
            </p>
          )}
        </div>
        <p className="font-semibold text-[22px] text-gray-800">
          {format(price)}
        </p>
      </div>
      <div className="bg-gray-100 p-3 flex flex-col gap-5 rounded-md">
        <h3 className="font-semibold text-gray-800 text-[22px]">Descripción</h3>
        <p>{description}</p>
        <p className="text-gray-400 bottom-0">{address}</p>
      </div>
    </div>
  );
};

export default PropertyDetails;
