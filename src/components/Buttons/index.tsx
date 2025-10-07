import { Button } from "antd";

const icon = <i className="fa-solid fa-download"></i>;
const size = "large";

type ButtonPrimary = {
  icon: React.ReactNode;
  text: string;
  size: "large" | "middle" | "small";
};

export const ButtonPrimary: React.FC<ButtonPrimary> = ({
  icon,
  text,
  size = "large",
}) => {
  return (
    <Button type="primary" shape="round" icon={icon} size={size}>
      {text}
    </Button>
  );
};

export const ButtonSecondary: React.FC<ButtonPrimary> = ({
  icon,
  text,
  size = "large",
}) => {
  return (
    <Button shape="round" icon={icon} size={size}>
      {text}
    </Button>
  );
};
