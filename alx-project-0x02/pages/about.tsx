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
        <div className={`${geistSans.className} ${geistMono.className} flex min-h-screen justify-center items-center dark:bg-black`}>
            <h1>Make sure to know about me</h1>
        </div>
    )
}

export default About