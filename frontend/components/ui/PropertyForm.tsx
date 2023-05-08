import { ChangeEvent, useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import optionsGenerator from "utils/optionsGenerator";
import Image from "next/image";
import axios from "axios";
import { IProperty } from "../../state/interfaces/interfaces";
import { CustomInput, CustomTextArea, CustomSelect } from "./";
import { useActions } from "../../hooks/useActions";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

interface Props {
  property?: IProperty | undefined;
}

export const PropertyForm = ({ property }: Props) => {
  const [uploading, setUploading] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>();
  const { createProperty, updateProperty } = useActions();
  const { fetchProperties, setUser } = useActions();
  const token = Cookies.get("token");

  useEffect(() => {
    fetchProperties("");
    setUser();
  }, []);

  const initialValues = {
    title: property?.title || "", //input text
    description: property?.description || "", //text-area
    address: property?.address || "", //input text
    type: property?.type || "", //input text
    coveredArea: property?.coveredArea || 0, //input number
    totalArea: property?.totalArea || 0, //input number
    price: property?.price || 0, //input number
    bathrooms: property?.bathrooms || 0, //select
    operation: property?.operation || "alquiler", //select
    rooms: property?.rooms || 0, //select
    antiquity: property?.antiquity || 0, //select
    bedrooms: property?.bedrooms || 0, //select
    images: property?.images.map(({ url }) => url) || [], // file
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Requerido"),
    description: Yup.string().required("Requerido"),
    address: Yup.string().required("Requerido"),
    type: Yup.string().required("Requerido"),
    coveredArea: Yup.number().required("Requerido"),
    totalArea: Yup.number().required("Requerido"),
    price: Yup.number().required("Requerido"),
    bathrooms: Yup.number().required("Requerido"),
    operation: Yup.string().required("Requerido"),
    rooms: Yup.number().required("Requerido"),
    antiquity: Yup.number().required("Requerido"),
    bedrooms: Yup.number().required("Requerido"),
    images: Yup.array(),
  });

  const onFileSelected = async ({ target }: ChangeEvent<HTMLInputElement>) => {
    setUploading(true);
    const files = target.files;

    if (!files || !files.length) return;

    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append("images", file);
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/upload`,
          formData,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setUploading(false);
        setImages(() => [...data]);
      }
    } catch (error) {
      console.log(error);
    }

    setUploading(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        // Creando
        if (!property) {
          const newProperty = {
            ...values,
            bathrooms: Number(values.bathrooms),
            rooms: Number(values.rooms),
            antiquity: Number(values.antiquity),
            bedrooms: Number(values.bedrooms),
            images,
          };

          createProperty(newProperty);
          values = {
            title: "",
            description: "",
            address: "",
            type: "",
            coveredArea: 0,
            totalArea: 0,
            price: 0,
            bathrooms: 0,
            operation: "alquiler",
            rooms: 0,
            antiquity: 0,
            bedrooms: 0,
            images: [],
          };
          Swal.fire({
            title: "Creado correctamente",
            icon: "success",
            position: "center",
            showConfirmButton: false,
            timer: 2000,
            customClass: {
              title: "text-white",
              popup: "bg-green-500",
            },
          });
          return;
        }

        // Editando
        const propertyUpdated = {
          ...values,
          bathrooms: Number(values.bathrooms),
          rooms: Number(values.rooms),
          antiquity: Number(values.antiquity),
          bedrooms: Number(values.bedrooms),
          images: images ? images : values.images,
        };

        updateProperty(propertyUpdated, property.id);
        Swal.fire({
          title: "Editado correctamente",
          icon: "success",
          position: "center",
          showConfirmButton: false,
          timer: 2000,
          customClass: {
            title: "text-white",
            popup: "bg-green-500",
          },
        });
        return;
      }}
    >
      {(formik) => (
        <Form className="flex flex-col gap-5 p-5 w-full md:w-[60%] mx-auto">
          {/* INPUTS */}
          <CustomInput
            name="title"
            type="text"
            className="p-5 rounded-md bg-gray-100"
            label="Titulo"
          />

          <CustomTextArea
            className="min-h-[175px] bg-gray-100"
            name="description"
            label="Descripción"
          />

          <CustomInput
            name="address"
            type="text"
            className="p-5 rounded-md bg-gray-100"
            placeholder=""
            label="Dirección"
          />
          <CustomInput
            name="type"
            type="text"
            className="p-5 rounded-md bg-gray-100"
            placeholder="Garage - Departamento - PH"
            label="Tipo"
          />
          <CustomInput
            name="coveredArea"
            type="number"
            className="p-5 rounded-md bg-gray-100"
            placeholder=""
            label="Metros Cubiertos"
          />
          <CustomInput
            name="totalArea"
            type="number"
            className="p-5 rounded-md bg-gray-100"
            placeholder=""
            label="Metros Totales"
          />
          <CustomInput
            name="price"
            type="number"
            className="p-5 rounded-md bg-gray-100"
            placeholder=""
            label="Precio"
          />

          {/* SELECT */}
          <CustomSelect
            as="select"
            name="bathrooms"
            label="Baños"
            className="p-5 rounded-md bg-gray-100"
          >
            {optionsGenerator(10)}
          </CustomSelect>

          <CustomSelect
            name="operation"
            label="Operación"
            className="p-5 rounded-md bg-gray-100"
            as="select"
          >
            <option value="venta">Venta</option>
            <option value="alquiler">Alquiler</option>
          </CustomSelect>

          <CustomSelect
            as="select"
            name="rooms"
            label="Ambientes"
            className="p-5 rounded-md bg-gray-100"
          >
            {optionsGenerator(10)}
          </CustomSelect>

          <CustomSelect
            as="select"
            name="antiquity"
            label="Antiguedad"
            className="p-5 rounded-md bg-gray-100"
          >
            {optionsGenerator(10)}
          </CustomSelect>

          <CustomSelect
            as="select"
            name="bedrooms"
            label="Habitaciones"
            className="p-5 rounded-md bg-gray-100"
          >
            {optionsGenerator(10)}
          </CustomSelect>

          {/* IMAGES */}

          <h3>Imágenes:</h3>
          <div className="flex flex-wrap gap-5">
            {initialValues.images.map((url) => (
              <Image
                alt="Imagen de la propiedad"
                src={url}
                key={url}
                height="160"
                width="160"
                className="rounded-md w-auto h-auto"
              />
            ))}
          </div>

          {/* FILES */}

          <label htmlFor="images" className="flex flex-col gap-3">
            Sube una imagen:
            <input
              type="file"
              id="images"
              placeholder="abrir"
              name="images"
              multiple
              onChange={(e) => onFileSelected(e)}
            />
          </label>

          {uploading && (
            <button
              disabled={uploading}
              className="w-full bg-blue-900 opacity-60 font-semibold text-gray-100 p-5"
            >
              Subiendo Imágenes
            </button>
          )}
          <button
            type="submit"
            className={`w-full bg-blue-900 font-semibold text-gray-100 p-5 ${
              uploading && "hidden"
            }`}
            disabled={uploading}
          >
            {!property ? "Crear" : "Guardar"}
          </button>
        </Form>
      )}
    </Formik>
  );
};
