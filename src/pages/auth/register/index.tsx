import { AppButton, InputField } from "@/components/common";
import { AuthLayout } from "@/components/layout/auth";
import { useAuth } from "@/hooks/use-auth";
import { IRegisterForm } from "@/types/auth";
import { registerValidationFormSchema } from "@/utils/validation";
import { Box } from "@mui/material";
import { Formik } from "formik";

function Register() {
  const { register } = useAuth({
    revalidateOnMount: false,
  });

  const onSubmit = (data: IRegisterForm) => {
    register(data);
  };

  return (
    <div>
      <Formik
        validateOnChange={true}
        initialValues={{
          email: "",
          password: "",
          first_name: "",
          last_name: "",
          phone: "",
        }}
        validationSchema={registerValidationFormSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => {
          return (
            <form>
              <Box sx={{ margin: "1rem 0" }}>
                <InputField
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  placeholder={""}
                  error={errors.email}
                  touched={touched.email}
                />
              </Box>
              <Box sx={{ margin: "1rem 0" }}>
                <InputField
                  label="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange("password")}
                  isPassword
                  placeholder={""}
                  error={errors.password}
                  touched={touched.password}
                />
              </Box>
              <Box sx={{ margin: "1rem 0" }}>
                <InputField
                  label="First name"
                  name="fist_name"
                  value={values.password}
                  onChange={handleChange("password")}
                  isPassword
                  placeholder={""}
                  error={errors.password}
                  touched={touched.password}
                />
              </Box>
              <Box sx={{ margin: "1rem 0" }}>
                <InputField
                  label="First name"
                  name="last_name"
                  value={values.password}
                  onChange={handleChange("last_name")}
                  isPassword
                  error={errors.last_name}
                  touched={touched.last_name}
                />
              </Box>
              <Box sx={{ margin: "1rem 0" }}>
                <InputField
                  label="Last name"
                  name="last_name"
                  value={values.last_name}
                  onChange={handleChange("last_name")}
                  isPassword
                  placeholder={""}
                  error={errors.last_name}
                  touched={touched.last_name}
                />
              </Box>
              <Box sx={{ margin: "1rem 0" }}>
                <InputField
                  label="Phone Number"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange("phone")}
                  isPassword
                  placeholder={""}
                  error={errors.phone}
                  touched={touched.phone}
                />
              </Box>
              <Box sx={{ margin: "1rem 0" }}>
                <AppButton onClick={handleSubmit} text="Submit" />
              </Box>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}

Register.Layout = AuthLayout;

export default Register;
