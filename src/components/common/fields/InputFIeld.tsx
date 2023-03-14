import { TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { Error, WrappedInput } from "./style";
import { ErrorMessage } from "formik";

interface IInputProps {
  placeholder?: string;
  label: string;
  value: string | undefined | null;
  name: string;
  onChange: (values: any) => void;
  style?: any;
  containerStyle?: Object;
  isPassword?: boolean;
  error?: string | null | undefined;
  touched?: boolean;
}

export const InputField = (props: IInputProps) => {
  const {
    placeholder,
    label,
    value,
    name,
    error,
    touched,
    onChange,
    isPassword,
  } = props;
  const handleOnChange = (e: ChangeEvent<any>) => {
    onChange(e);
  };
  console.log("error", error);
  return (
    <WrappedInput>
      <TextField
        {...props}
        name={name}
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
        label={label}
        id="outlined-basic"
        variant="outlined"
        type={isPassword ? "password" : "text"}
        error={!!error}
      />
      {(error || name || touched) && (
        <ErrorMessage name={name} component={Error} />
      )}
    </WrappedInput>
  );
};
