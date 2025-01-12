import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";

const ContractInput = () => {
  return (
    <div>
      <Input className="max-w-xl" type="email" label="Name" />
      <Input className="max-w-xl" type="email" label="Email" />
      <Input className="max-w-xl" type="email" label="Nobile" />
      <Textarea
        label="Description"
        placeholder="Enter your message"
        className="max-w-xl"
      />
      <Button className="max-w-xs bg-gray-500 px-8 py-6 text-white">
        Submit
      </Button>
    </div>
  );
};

export default ContractInput;
