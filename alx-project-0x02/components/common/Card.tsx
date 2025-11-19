import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ userId, title, content }) => {
    return (
        <>
            <h2 className="text-center" key={userId}>{title}</h2>
            <p className="border border-solid border-amber-100 p-4 rounded-lg">{content}</p>
        </>
    )
}

export default Card