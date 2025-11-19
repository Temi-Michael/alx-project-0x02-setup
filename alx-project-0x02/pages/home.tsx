import { Geist, Geist_Mono } from "next/font/google";
import Card from "@/components/common/Card";
import { CardProps } from "@/interfaces";
import Header from "@/components/layout/Header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

interface HomeProps {
    posts: CardProps[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
    return (
        <div
            className={`${geistSans.className} ${geistMono.className} w-full p-[25px] bg-zinc-50 font-sans dark:bg-black`}
        >
            <Header />
            <div className="grid grid-cols-4 gap-5">

                {
                    posts.map((item, index) => {
                        return (
                            <div className="flex flex-col gap-5 mb-5" key={index}>
                                <Card title={item.title} content={item.content} userId={item.userId} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home