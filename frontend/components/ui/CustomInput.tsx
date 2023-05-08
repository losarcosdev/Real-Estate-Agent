import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  type: "password" | "email" | "text" | "number";
  placeholder?: string;
  [x: string]: any;
  className?: string;
}

export const CustomInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className={props.className} {...field} {...props} />
      <ErrorMessage
        name={props.name}
        component="span"
        className="text-red-600 font-medium"
      />
    </>
  );
};
