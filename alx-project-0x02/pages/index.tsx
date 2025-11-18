import PostModal from "@/components/common/PostModal";
import { PostData } from "@/interfaces";
import { Geist, Geist_Mono } from "next/font/google";
import React, { useState } from "react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface IndexPageProps {
  addPost: (post: PostData) => void;
}

export default function Home({ addPost }: IndexPageProps) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }


  return (
    <div className={` ${geistSans.className} ${geistMono.className} flex min-h-screen justify-center items-center dark:bg-black`}>
      <button className="bg-gray-600 p-2 text-md font-semibold rounded-lg cursor-pointer" onClick={handleOpenModal}>Create New Post</button>
      {
        isModalOpen && (
          <PostModal title="" content="" onClose={handleCloseModal} addPost={addPost} />
        )
      }
    </div>
  );
}
