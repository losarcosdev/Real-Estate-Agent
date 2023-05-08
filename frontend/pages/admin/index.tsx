import { Formik, Form } from "formik";
import { useAuth } from "hooks";
import { useRouter } from "next/router";
import { CustomInput } from "../../components/ui/CustomInput";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useCustomSelector } from "../../hooks/useCustomSelector";
import { useActions } from "../../hooks/useActions";

const AdminLoginPage = () => {
  const { initialValues, onSubmit, validationSchema } = useAuth();
  const { isAuthenticated } = useCustomSelector((state) => state.auth);
  const router = useRouter();
  const { setUser } = useActions();

  useEffect(() => {
    isAuthenticated && router.replace("/admin/dashboard");
    setUser();
  }, [isAuthenticated, router]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form className="p-5 bg-gray-100 flex flex-col items-center justify-center w-[410px] mx-auto mt-[150px] gap-5 rounded-md">
          <h1 className="font-semibold text-[18px]">
            Accede para administrar tus propiedades
          </h1>
          <CustomInput
            label="Email"
            name="email"
            type="email"
            placeholder="tucuenta@gmail.com"
            className="p-5 rounded-md w-full "
          />
          <CustomInput
            label="Contraseña"
            name="password"
            type="password"
            placeholder="****"
            className="p-5 rounded-md w-full "
          />

          <button
            type="submit"
            className={"w-full bg-blue-900 font-semibold text-gray-100 p-5"}
          >
            Acceder
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AdminLoginPage;
