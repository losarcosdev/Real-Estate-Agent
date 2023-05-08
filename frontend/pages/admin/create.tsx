import { AdminLayout, PropertyForm } from "components";

const AdminCreateProperty = () => {
  return (
    <AdminLayout>
      <div className="mt-[25px] flex flex-col">
        <h1 className="text-center font-semibold text-[20px]">
          Creando nueva propiedad
        </h1>
        <PropertyForm />
      </div>
    </AdminLayout>
  );
};

export default AdminCreateProperty;
