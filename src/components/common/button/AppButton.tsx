import { Button } from "@mui/material";
import { styled } from "@mui/system";

interface IButtonProps {
  text: string;
  onClick: (value?: any) => void;
}

const WrappedButton = styled("div")((props) => ({
  width: "100%",
  ".btn": {
    width: "100%",
    textTransform: "capitalize",
    fontSize: "14px",
  },
}));

export const AppButton = (props: IButtonProps) => {
  const { text, onClick } = props;

  return (
    <WrappedButton>
      <Button className="btn" onClick={onClick} variant="contained">
        {text}
      </Button>
    </WrappedButton>
  );
};
