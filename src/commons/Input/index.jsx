import { Input as NuiInput } from "@nextui-org/react";

const Input = ({ ...props }) => {
  return (
    <>
      <NuiInput {...props} />
    </>
  );
};

export default Input;
