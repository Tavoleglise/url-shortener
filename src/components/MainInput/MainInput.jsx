import Input from "../../commons/Input";
import Button from "../../commons/Button";

const MainInput = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Input className="" type="email" label="Your URL" />
      <Button className="ml-4">Make it short</Button>
    </div>
  );
};

export default MainInput;
