import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IProperty } from "state";

interface Props {
  property: IProperty;
}

const ImageGallery = ({ property }: Props) => {
  const [active, setActive] = useState<string>(property.images[0].url);

  return (
    <div className="flex flex-col items-center justify-center my-5 gap-2 md:flex-row md:my-0 md:gap-0">
      <div className="md:p-2">
        <motion.img
          alt="Image"
          src={active}
          className="w-[90vw] h-[550px] rounded-xl md:w-[800px] md:h-[600px] md:p-3"
        />
      </div>
      {/*Framer motion scroll*/}
      <div className="overflow-x-scroll w-[95vw] md:w-[310px] md:h-[600px] md:overflow-y-scroll md:p-3">
        <div className="flex md:flex-col md:gap-2">
          {property.images.map(({ id, url }) => (
            <div key={id} className="min-w-[15rem] p-[10px] md:p-0">
              <Image
                onClick={() => setActive(url)}
                src={url}
                alt={"Property Image"}
                height={"500"}
                width={"500"}
                className={`h-[100px] md:h-[200px] md:w-[330px] object-cover rounded-xl ${
                  active === url ? "opacity-100" : "opacity-50"
                } cursor-pointer`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
