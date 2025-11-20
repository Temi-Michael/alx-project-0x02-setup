import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({text, shape, size}) => {
    return (
        <button className={`${shape} text-${size === "medium" ? "md" : size === "large" ? "lg" : "sm"} bg-gray-600 text-gray-300 border-none px-3 py-2`}>
            {text}
        </button>
    )
}


export default Button;