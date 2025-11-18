import Link from "next/link"
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const Header: React.FC = () => {
    return (
        <div className={`${geistSans.className} ${geistMono.className} flex w-full m-0 p-3 justify-center gap-5`}>
            <Link href="/">Webpage</Link>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
        </div>
    )
}

export default Header