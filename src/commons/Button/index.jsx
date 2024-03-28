import { Button as NuiButton } from "@nextui-org/react";

const Button = ({ ...props }) => {
  return (
    <>
      <NuiButton {...props} />
    </>
  );
};

export default Button;
