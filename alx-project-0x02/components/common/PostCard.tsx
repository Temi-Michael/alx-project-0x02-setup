import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({userId, title, content}) => {
    return (
        <div className="bg-gray-900 rounded-lg border-none p-3" key={userId}>
            <h2 className="text-center">{title}</h2>
            <p className="border border-solid border-amber-100 p-4 rounded-lg">{content}</p>
        </div>
    )
}

export default PostCard