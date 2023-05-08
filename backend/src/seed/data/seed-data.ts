/* eslint-disable prettier/prettier */

interface SeedProperties {
  title: string;
  price: number;
  address: string;
  bathrooms?: number;
  bedrooms?: number;
  coveredArea?: number;
  description?: string;
  images?: string[];
  operation: OperationTypes;
  rooms?: number;
  slug?: string;
  totalArea?: number;
  type: string;
  antiquity?: number;
  metaKeywords: string;
  metaDescription: string;
}

type OperationTypes = 'alquiler' | 'venta';

interface SeedData {
  properties: SeedProperties[];
}

export const initialData: SeedData = {
  properties: [
    {
      title:
        'Cochera en venta en Avenida Directorio 2800, Flores, Capital Federal',
      slug: 'cochera_en_venta_en_avenida_directorio_2800_,_flores,_capital_federal',
      description: `
      COCHERA EN PB EXCELENTE UBICACION EN FLORES
      * VENTA  YA !!! 
      
      * COCHERA  USD 17.000 
       
      * DIRECTORIO 2800 - COCHERA FIJA- BAJAS EXPENSAS.
      
      * EN EDIFICIO  EN BARRIO FLORES.
      
      * FACIL ACCESO EN PLANTA BAJA. 
      
      * PORTON ELECTRICO.
  
      * EXCELENTE UBICACION ,A MTS DE AV. SAN PEDRITO.
      `,
      address: 'Avenida Directorio 2800, Flores, Capital Federal',
      price: 17000,
      totalArea: 15,
      coveredArea: 15,
      operation: 'venta',
      type: 'garage',
      antiquity: 1,
      images: [
        'https://res.cloudinary.com/dadzmqfkk/image/upload/v1672434045/kcr6rlyp8uo9upxbwkpc.webp',
        'https://res.cloudinary.com/dadzmqfkk/image/upload/v1672434044/dvgdozs51akg3eergv99.webp',
        'https://res.cloudinary.com/dadzmqfkk/image/upload/v1672434044/d55duowfadcwh64dodtw.webp',
        'https://res.cloudinary.com/dadzmqfkk/image/upload/v1672434044/ww4ybubjtrsdd24ci2rw.webp',
        'https://res.cloudinary.com/dadzmqfkk/image/upload/v1672434045/upzyv2ao45ap3ic8u1mh.webp',
      ],
      metaKeywords:
        'cochera en PB, venta, USD 17.000, Directorio 2800, fija, bajas expensas, edificio, barrio Flores, fácil acceso, planta baja, portón eléctrico, ubicación excelente, Av. San Pedrito.',
      metaDescription:
        'Venta de cochera fija en planta baja con portón eléctrico y bajas expensas en excelente ubicación del barrio Flores. Fácil acceso y cercanía a Av. San Pedrito. ¡No pierdas la oportunidad de tener tu propio espacio seguro para estacionar tu vehículo! Precio: USD 17.000.',
    },
    {
      title: 'Departamento en venta en Caaguazú 6100, Liniers, Capital Federal',
      slug: 'departamento_en_venta_en_caaguazú_6100_,_liniers_,_fapital_federal',
      description: `
      DEPARTAMENTO 3 AMB CON BALCON CORRIDO
  
      SE ESCUCHAN OFERTAS !!
          
      *IDEAL INVERSOR*
      
      ENTREGA DICIEMBRE 2022
      
      * DPTO DE 3AMB CON BALCON CORRIDO.
      
      * BAÑO COMPLETO Y TOILETTE DE RECEPCION.
      
      * COCINA CON DESAGUE PARA LAVARROPAS.
      
      * LIVING COMEDOR DE AMPLIAS MEDIDAS.
      
      * 2 DORMITORIOS, UNO CON VESTIDOR, LOS DOS CON SALIDA AL BALCON
      
      SE ESCUCHAN OFERTAS!
      
      Una propuesta exclusiva que combina confort, funcionalidad y categoría. 
      En una excelente ubicación en el barrio de Liniers, muy próximo a las principales
      arterias de circulación como Av. General Paz, Au. Perito Moreno y Av. Larrazabal; y a pocas cuadras del Parque Santojiani.
      
      GENERALIDADES:
      -Estructura de hormigón armado
      -Muros exteriores en ladrillo cerámico de 18cm
      -Muros divisorios de unidades en ladrillo cerámico de 12cm
      -Revestimiento plástico exterior tipo Tarquini con nivel medio de rusticidad en 
        frente y contrafrente
      -Puerta de acceso a unidades en cedro
      -Carpinterías de PVC de excelente calidad y hermeticidad
      -Piso de porcellanato simil madera en Microdepartamentos y dormitorios
      -Piso de porcellanato brillante en unida- des, pasillos, palieres y baños
      -Microdepartamentos totalmente amoblados
      -Split frío-calor en todas las unidades
      -Espacio para lavarropas en todas las unidades
      -Sistema de agua caliente central con termotanques de gran capacidad
      -Placard con interiores y frentes completos
      -Solarium con deck y duchas en azotea
      -Patio en unidades en 3er piso en espacio aire-luz
      
      
      Los metros aquí publicados son aproximados, los reales surgen de la escritura traslativa de dominio. Martillero y Corredor Responsable: Oscar N. Liberman CUCICBA 1442 / Luis A. Schirripa CMCPSI 6515 Todas las propiedades que figuran en mi perfil se encuentran a cargo del profesional matriculado de la oficina, la intermediación y la conclusión de las operaciones serán llevadas exclusivamente por él.    
      `,
      antiquity: 0,
      bathrooms: 1,
      bedrooms: 2,
      coveredArea: 65.58,
      price: 110000,
      rooms: 3,
      totalArea: 84.93,
      address: 'Caaguazú 6100, Liniers, Capital Federal',
      type: 'Departamento',
      images: [
        'https://res.cloudinary.com/dadzmqfkk/image/upload/v1672434113/j1kdz1n5wyp2e2ezg0g1.webp',
        'https://res.cloudinary.com/dadzmqfkk/image/upload/v1672434113/aqboyhrntrvvda1r7pem.webp',
      ],
      metaDescription:
        'Departamento de 3 amb con balcón corrido y entrega en diciembre de 2022 en Liniers. Ideal para inversores, cerca de importantes avenidas y del Parque Santojiani. Construcción de hormigón armado y ladrillo cerámico, acabado Tarquini en el exterior y interior con pisos de porcellanato, placard y amoblado. Incluye solarium y patio en las unidades del tercer piso. ¡No te pierdas la oportunidad de tener un departamento con categoría y funcionalidad!',
      metaKeywords:
        'departamento 3 amb, balcón corrido, oferta, inversión, entrega diciembre 2022, Liniers, General Paz, Perito Moreno, Parque Santojiani, hormigón armado, ladrillo cerámico, Tarquini, PVC, porcellanato, amoblado, split, placard, solarium, patio, escritura traslativa de dominio',
      operation: 'venta',
    },
    {
      title:
        'Departamento en venta en Itaquí 6700, Villa Lugano, Capital Federal',
      slug: 'departamento_en_venta_en_itaquí_6700,_villa_lugano,_capital_federal',
      description: `
      VENTA DEPTO 2 AMB C/COCHERA -PATIO -V.LUGANO R.
      VENTA DEPTO 2 AMB C/COCHERA -PATIO -V.LUGANO R.

      REMAX HABITAT VENDE  EN VILLA LUGANO - ZONA RESIDENCIAL 

      *Edifico de 4 años de antigüedad, muy bien mantenido
      *2 Ambientes 
      *Departamento en muy buen estado
      *Living Comedor con cocina incorporada 
      *Lavadero incorporado
      *Baño Completo
      *Dormitorio de muy buenas medidas con Placard
      *Patio con salidas desde el Living y el Dormitorio
      *Cochera

      Muy bien ubicado

      A dos cuadras de Av. General Paz
      A dos cuadras de Centro Comercial
      A dos cuadras de Plaza Sudamérica
    `,
      price: 95000,
      totalArea: 49.94,
      coveredArea: 34,
      rooms: 2,
      bathrooms: 1,
      bedrooms: 1,
      antiquity: 6,
      type: 'Departamento',
      address: 'Itaquí 6700, Villa Lugano, Capital Federal',
      images: [
        'https://res.cloudinary.com/dadzmqfkk/image/upload/v1672433916/wetqh1itwdyov5tokcu6.webp',
        'https://res.cloudinary.com/dadzmqfkk/image/upload/v1672433916/wbeqc3osaeqtnjwgrd4r.webp',
        'https://res.cloudinary.com/dadzmqfkk/image/upload/v1672433916/miinq41q6qmcjfw49tsd.webp',
        'https://res.cloudinary.com/dadzmqfkk/image/upload/v1672433916/wywiopgpewzo6yhadxdy.webp',
        'https://res.cloudinary.com/dadzmqfkk/image/upload/v1672433916/oezbxnnyudmlfovwesjj.webp',
        'https://res.cloudinary.com/dadzmqfkk/image/upload/v1672433916/gkdeqggzosilwlgjalmt.webp',
        'https://res.cloudinary.com/dadzmqfkk/image/upload/v1672433916/fdr4u8vieoiowevebicp.webp',
      ],
      metaDescription:
        '¡Aprovecha esta oportunidad! Departamento de 2 ambientes en excelente estado y con cochera en Villa Lugano, zona residencial. Living comedor con cocina incorporada, lavadero, baño completo, dormitorio con placard y patio con acceso desde ambos ambientes. Edificio de 4 años de antigüedad muy bien mantenido y ubicado a dos cuadras de Av. General Paz, centro comercial y Plaza Sudamérica. ¡Contacta con REMAX HABITAT y agenda tu visita hoy mismo!',
      metaKeywords:
        'Venta departamento, 2 ambientes, cochera, patio, Villa Lugano, zona residencial, edificio, buen estado, ubicación.',
      operation: 'venta',
    },
  ],
};
