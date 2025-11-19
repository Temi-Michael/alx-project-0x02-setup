import Button from "@/components/common/Button";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


const About: React.FC = () => {
    return (
        <div className={`${geistSans.className} ${geistMono.className} flex flex-col min-h-screen justify-center items-center dark:bg-black`}>
            <h1>Make sure to know about me</h1>
            <div className="grid grid-cols-3 p-5 gap-5">
                <Button text="Button 1" size="text-sm" shape="rounded-sm" />
                <Button text="Button 2" size="text-md" shape="rounded-md" />
                <Button text="Button 3" size="text-lg" shape="rounded-lg" />
            </div>
        </div>
    )
}

export default About