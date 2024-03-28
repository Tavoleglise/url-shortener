import { CircularProgress } from "@nextui-org/react";

const CircularLoader = ({ ...props }) => {
  return <CircularProgress {...props} aria-label="Loading..." />;
};

export default CircularLoader;
