import { LayoutProps } from "@/types/common";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";

const AuthLayoutStyled = styled("div")((props) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  fontSize: "",
  [props.theme.breakpoints.down("sm")]: {
    alignItems: "center",
    justifyContent: "center",
  },
}));

export function AuthLayout(props: LayoutProps) {
  return (
    <AuthLayoutStyled className="auth-layout">
      <Grid container spacing={2}>
        <Grid item sm={6}></Grid>
        <Grid item xs={12} sm={6}>
          {props.children}
        </Grid>
      </Grid>
    </AuthLayoutStyled>
  );
}
