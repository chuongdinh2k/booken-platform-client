import { TextField } from "@mui/material";
import { ChangeEvent, useCallback } from "react";
import { Error, WrappedInput } from "./style";
import { ErrorMessage, useField } from "formik";

interface IInputProps {
  placeholder?: string;
  label: string;
  value: string | undefined | null;
  name: string;
  onChange: (values: any) => void;
  style?: any;
  containerStyle?: Object;
  isPassword?: boolean;
}

export const InputField = (props: IInputProps) => {
  const { placeholder, label, value, name, onChange, isPassword } = props;
  const [field, meta] = useField(name);
  const hasError = !!meta.error && !!meta.touched;
  const handleOnChange = useCallback(
    (e: ChangeEvent<any>) => {
      onChange(e);
    },
    [value]
  );
  return (
    <WrappedInput>
      <TextField
        {...props}
        name={name}
        autoComplete="off"
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
        inputProps={{
          form: {
            autocomplete: "off",
          },
        }}
        onBlur={field.onBlur}
        label={label}
        id="outlined-basic"
        variant="outlined"
        type={isPassword ? "password" : "text"}
        error={!!hasError}
      />
      {hasError && <ErrorMessage name={name} component={Error} />}
    </WrappedInput>
  );
};
