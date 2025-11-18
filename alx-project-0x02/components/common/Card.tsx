import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <>
            <h2 className="text-center">{title}</h2>
            <p className="border border-solid border-amber-100 p-4 rounded-lg">{content}</p>
        </>
    )
}

export default Card