import { useActions } from "hooks";
import { useCustomSelector } from "../../hooks/useCustomSelector";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AdminLayout } from "components";
import { IProperties } from "../../state/interfaces/interfaces";
import Swal from "sweetalert2";

const DashboardPage = () => {
  const { properties } = useCustomSelector((state) => state.admin);
  const { fetchAdminProperties, setUser, deleteProperty } = useActions();

  useEffect(() => {
    fetchAdminProperties();
    setUser();
  }, []);

  const handleDelete = (property: IProperties) => {
    deleteProperty(property, property.id);
    Swal.fire({
      title: "Eliminado correctamente",
      icon: "success",
      position: "center",
      showConfirmButton: false,
      timer: 2000,
      customClass: {
        title: "text-white",
        popup: "bg-green-500",
      },
    });
  };

  return (
    <AdminLayout>
      <div className="flex flex-col gap-5 mt-[20px] p-5">
        <h1 className="text-center font-bold text-[20px]">Propiedades:</h1>
        {properties.map((property) => (
          <figure
            key={property.id}
            className="flex items-center justify-center bg-gray-100 w-fit p-5 mx-auto gap-5 h-fit"
          >
            <div>
              <Image
                alt={property.title}
                src={property.images[0]}
                height={"100"}
                width={"100"}
                className="w-auto h-auto rounded-md"
              />
            </div>
            <div>
              <h3>{property.title}</h3>
            </div>
            <div className="flex gap-3">
              <Link
                href="/admin/edit/[slug]"
                as={`/admin/edit/${property.slug}`}
              >
                <button className="p-3 bg-blue-600 rounded-lg font-semibold text-gray-100 active:translate-y-1 transition-all duration-300">
                  Editar
                </button>
              </Link>
              <button
                onClick={() => handleDelete(property)}
                className="p-3 bg-red-600 rounded-lg font-semibold text-gray-100 active:translate-y-1 transition-all duration-300"
              >
                Eliminar
              </button>
            </div>
          </figure>
        ))}
      </div>
    </AdminLayout>
  );
};

export default DashboardPage;
