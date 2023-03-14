import { styled } from "@mui/system";

export const WrappedInput = styled("div")((props) => ({
  width: "100%",
  "& .MuiTextField-root": {
    width: "100%",
  },
}));

export const Error = styled("div")((props) => ({
  color: "red",
  padding: "0.5rem 0",
  maxWidth: "15rem",
}));
