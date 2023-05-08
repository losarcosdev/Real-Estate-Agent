export interface IWorld {
  id: string;
  imgUrl: string;
  title: string;
}

export const exploreWorlds: IWorld[] = [
  {
    id: "world-1",
    imgUrl: "/planet-01.png",
    title: "The Hogwarts",
  },
  {
    id: "world-2",
    imgUrl: "/planet-02.png",
    title: "The Upside Down",
  },
  {
    id: "world-3",
    imgUrl: "/planet-03.png",
    title: "Kadirojo Permai",
  },
  {
    id: "world-4",
    imgUrl: "/planet-04.png",
    title: "Paradise Island",
  },
  {
    id: "world-5",
    imgUrl: "/planet-05.png",
    title: "Hawkins Labs",
  },
  {
    id: "world-11",
    imgUrl: "/planet-01.png",
    title: "The Hogwarts",
  },
  {
    id: "world-12",
    imgUrl: "/planet-02.png",
    title: "The Upside Down",
  },
  {
    id: "world-13",
    imgUrl: "/planet-03.png",
    title: "Kadirojo Permai",
  },
  {
    id: "world-14",
    imgUrl: "/planet-04.png",
    title: "Paradise Island",
  },
  {
    id: "world-15",
    imgUrl: "/planet-05.png",
    title: "Hawkins Labs",
  },
  {
    id: "world-6",
    imgUrl: "/planet-01.png",
    title: "The Hogwarts",
  },
  {
    id: "world-7",
    imgUrl: "/planet-02.png",
    title: "The Upside Down",
  },
  {
    id: "world-8",
    imgUrl: "/planet-03.png",
    title: "Kadirojo Permai",
  },
  {
    id: "world-9",
    imgUrl: "/planet-04.png",
    title: "Paradise Island",
  },
  {
    id: "world-10",
    imgUrl: "/planet-05.png",
    title: "Hawkins Labs",
  },
];

export const startingFeatures: string[] = [
  "Encuentra una propiedad que rt",
  "Enter the world by reading basmalah to be safe",
  "No need to beat around the bush, just stay on the gas and have fun",
];

export const newFeatures = [
  {
    imgUrl: "/vrpano.svg",
    title: "A new world",
    subtitle:
      "we have the latest update with new world for you to try never mind",
  },
  {
    imgUrl: "/headset.svg",
    title: "More realistic",
    subtitle:
      "In the latest update, your eyes are narrow, making the world more realistic than ever",
  },
];

export const insights = [
  {
    imgUrl: "/planet-06.png",
    title: "The launch of the Metaverse makes Elon musk ketar-ketir",
    subtitle:
      "Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.",
  },
  {
    imgUrl: "/planet-07.png",
    title: "7 tips to easily master the madness of the Metaverse",
    subtitle:
      "Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum",
  },
  {
    imgUrl: "/planet-08.png",
    title: "With one platform you can explore the whole world virtually",
    subtitle:
      "Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem",
  },
];

export const socials = [
  {
    name: "instagram",
    url: "/instagram.svg",
  },
  {
    name: "facebook",
    url: "/facebook.svg",
  },
];

// Properties Constants

const iconBaseUrl = "https://www.remax.com.ar/assets/icons/";

export const propertiesIcons = {
  bathroom: `${iconBaseUrl}/bathrooms.svg`,
  totalSurface: `${iconBaseUrl}/total-surface.svg`,
  coveredSurface: `${iconBaseUrl}/covered-surface.svg`,
  rooms: `${iconBaseUrl}/rooms.svg`,
  bedrooms: `${iconBaseUrl}/bedrooms.svg`,
};

export const ourServices = [
  {
    service: "Compra",
    description:
      "Si está interesado en comprar una casa, puedo ayudarlo a encontrar la propiedad perfecta para sus necesidades y presupuesto. Haré un seguimiento de todo el proceso de compra, desde la búsqueda hasta la firma del contrato y la obtención de la hipoteca.",
    contact: "Contactar",
  },
  {
    service: "Vende",
    description:
      "Si está interesado en vender su propiedad, puedo ayudarlo a determinar el precio adecuado y a promocionar su casa a compradores potenciales. También puedo ayudarlo a navegar por el proceso de venta y asegurarme de que todo se haga de manera rápida y eficiente.",
    contact: "Contactar",
  },
  {
    service: "Alquila",
    description:
      "Si está buscando un lugar para alquilar, puedo ayudarlo a encontrar la propiedad adecuada y a negociar un contrato de alquiler justo. También puedo asistirle durante todo el proceso de alquiler y asegurarme de que todo se haga de manera eficiente y sin problemas.",
    contact: "Contactar",
  },
];
