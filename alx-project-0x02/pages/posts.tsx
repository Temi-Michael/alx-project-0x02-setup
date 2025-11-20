import { Geist, Geist_Mono } from "next/font/google";
import { PostProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});




const Posts: React.FC<{ projects: PostProps[] }> = ({ projects }) => {


    return (
        <div className={`${geistSans.className} ${geistMono.className} w-full flex flex-col min-h-screen  p-8 dark:bg-black`}>
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {projects.map((post, index) => (
                    <PostCard userId={post.userId} title={post.title} content={post.body} key={index} />
                ))}                                                                                      </div>
        </div>
    )
}

export default Posts;

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const projects = await response.json()

    return { props: { projects } }
}