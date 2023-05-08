/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { format, uppercaseFirstLetter } from "utils";
import { IProperties } from "state";

interface Props {
  property: IProperties;
}

export const PropertyCard = ({ property }: Props) => {
  const {
    bathrooms,
    coveredArea,
    images,
    operation,
    rooms,
    title,
    totalArea,
    price,
    slug,
  } = property;

  return (
    <Link href="/[slug]" as={`/${slug}`}>
      <div className="flex flex-col transition-all duration-300 hover:translate-y-1">
        {/* Images */}
        <div className="relative">
          <img src={images[1]} alt={title} className="h-[350px] w-fit" />
          <span className="absolute top-1 right-5 p-2 bg-blue-800 font-bold text-white rounded-sm">
            {uppercaseFirstLetter(operation)}
          </span>
        </div>
        {/* Details */}
        <div className="bg-gray-50 shadow-lg shadow-gray-100 p-8 flex flex-col gap-3 justify-center items-center">
          <h4>{title}</h4>
          <h4>{format(price)}</h4>

          <div className="flex gap-3 items-center justify-center">
            <p className="text-xs bg-gray-100 p-3">
              {bathrooms}
              {` ${bathrooms > 1 ? "Baños" : "Baño"}`}
            </p>
            <p className="text-xs bg-gray-100 p-3">
              {coveredArea} M² Cubiertos
            </p>
            <p className="text-xs bg-gray-100 p-3">
              {rooms} {` ${rooms > 1 ? "Ambientes" : "Ambiente"}`}
            </p>
            <p className="text-xs bg-gray-100 p-3">{totalArea} M² Totales</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
