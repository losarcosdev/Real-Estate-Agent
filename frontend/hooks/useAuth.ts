import * as Yup from "yup";
import { useActions } from "./useActions";

interface InitialValues {
  email: string;
  password: string;
}

export const useAuth = () => {
  const { loginUser } = useActions();

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values: InitialValues) => {
    loginUser(values.email, values.password);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  return {
    initialValues,
    onSubmit,
    validationSchema,
  };
};
