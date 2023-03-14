import { LayoutProps } from "@/types/common";
import { styled } from "@mui/system";

const AuthLayoutStyled = styled("div")((props) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "",
  [props.theme.breakpoints.down("xs")]: {},
}));

export function AuthLayout(props: LayoutProps) {
  return (
    <AuthLayoutStyled className="auth-layout">
      {props.children}
    </AuthLayoutStyled>
  );
}
