import { PostData, PostProps } from "@/interfaces";
import React from "react";

const PostModal: React.FC<PostProps> = ({ title, content, onClose, addPost }) => {

    const [post, setPost] = React.useState<PostData>({
        title: title,
        content: content,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPost((prevPost) => ({
            ...prevPost,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        if (addPost) {
            addPost(post);
        }
        onClose();
    }


    return (
        <div className="flex min-h-screen justify-center items-center bg-gray-200 dark:bg-black fixed inset-0 opacity-100 gradient-to-l from-gray-800 to-gray-500" aria-modal="true" role="dialog">
            <div className="w-1/3 bg-gray-700 p-5 rounded-lg">
                <div className="flex flex-col gap-3">
                    <label htmlFor="title">Title :</label>
                    <input type="text" name="title" id="title" value={post.title} onChange={handleChange} className="w-2/3 px-2 py-2 text-[15px] border border-solid border-gray-300 rounded-lg outline-none" />
                </div>
                <div className="flex flex-col gap-3 mt-5">
                    <label htmlFor="content">Content :</label>
                    <textarea name="content" id="content" value={post.content} onChange={handleChange} cols={30} rows={10} className="px-2 py-2 border border-solid border-gray-300 rounded-lg outline-none" />
                </div>
                <div className="flex flex-row justify-end gap-5 mt-5">
                    <button type="button" className="bg-none text-gray-300 font-light border-none" aria-label="Close modal" onClick={onClose} role="button">Close</button>
                    <button type="button" onClick={handleSubmit} className="bg-gray-600 text-gray-300 font-semibold border-none rounded-lg p-2 " aria-describedby="Create new post" role="button">Add Post</button>
                </div>
            </div>
        </div>
    )
}


export default PostModal