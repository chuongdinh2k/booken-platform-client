import * as yup from "yup";
export const loginValidationFormSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(8, "Password must be at least 8 characters long"),
});

export const registerValidationFormSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(8, "Password must be at least 8 characters long"),
  first_name: yup
    .string()
    .required()
    .max(17, "First name must not exceed 17 characters "),
  last_name: yup
    .string()
    .required()
    .max(17, "Last name must not exceed 17 characters "),
  phone: yup
    .string()
    .required()
    .max(10, "Phone must not exceed 10 characters "),
});
