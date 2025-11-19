import { Geist, Geist_Mono } from "next/font/google";
import { useState, useEffect } from "react";
import { CardProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const getPosts = async (url: string) => {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        return data
    }
    catch (error) {
        console.error("Error Fetching Posts : ", error)
        throw error
    }
}


const Posts: React.FC = () => {

    const [posts, setPosts] = useState<CardProps[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const fetchedPost = await getPosts("https://jsonplaceholder.typicode.com/posts")
                setPosts(fetchedPost)
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred while fetching posts.");
                }
            } finally {
                setIsLoading(false)
            }
        }
        fetchPost();
    }, [])

    if (isLoading) {
        return <div className="text-white">Loading posts...</div>;
    }
    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    return (
        <div className={`${geistSans.className} ${geistMono.className} w-full flex flex-col min-h-screen  p-8 dark:bg-black`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {posts.map((post, index) => (
                    <PostCard userId={post.userId} title={post.title} content={post.body} key={index} />
                ))}                                                                                      </div>
        </div>
    )
}

export default Posts;