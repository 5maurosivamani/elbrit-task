import { ButtonProps } from "@/types/Button";

function Button({ title }: ButtonProps) {
  return (
    <button className="bg-secondary text-white text-xs font-semibold py-3 px-8 rounded-full hover:opacity-85">
      {title}
    </button>
  );
}

export default Button;
