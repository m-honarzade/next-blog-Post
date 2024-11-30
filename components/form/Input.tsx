import { InputProps } from "@/types";
const Input = ({ name, type, placeholder, value }: InputProps) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className="border rounded-md p-2 shadow-sm w-full"
      />
    </div>
  );
};

export default Input;
