import { styled } from "@mui/system";

const LoginFormStyled = styled("form")((prop) => ({
  ".signup_text": {
    textTransform: "Capitalize",
    padding: "1rem 0",
    color: prop.theme.palette.primary.main,
  },
}));

export { LoginFormStyled };
