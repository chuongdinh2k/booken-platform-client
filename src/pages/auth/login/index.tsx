import { AppButton } from "@/components/common/button/AppButton";
import { InputField } from "@/components/common/fields/InputFIeld";
import { AuthLayout } from "@/components/layout/auth";
import { useAuth } from "@/hooks/use-auth";
import { ILoginForm } from "@/types/auth";
import { loginValidationFormSchema } from "@/utils/validation";
import { Box } from "@mui/material";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { LoginFormStyled } from "./style";

function Login() {
  const { login } = useAuth({
    revalidateOnMount: false,
  });

  const router = useRouter();

  const onSubmit = (values: ILoginForm) => {
    login(values);
  };
  return (
    <div>
      <h1 className="title">Login</h1>
      <Formik
        validateOnChange={true}
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginValidationFormSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => {
          return (
            <LoginFormStyled>
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
              <p
                className="signup_text"
                onClick={() => router.push("/auth/register")}
              >
                sign up now
              </p>
              <AppButton onClick={handleSubmit} text="login" />
            </LoginFormStyled>
          );
        }}
      </Formik>
    </div>
  );
}
Login.Layout = AuthLayout;
export default Login;
