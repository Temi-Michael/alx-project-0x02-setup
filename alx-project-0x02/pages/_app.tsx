import { multipleCardContents } from "@/constants";
import { CardProps, PostData } from "@/interfaces";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [posts, setPosts] = useState<CardProps[]>(multipleCardContents);

  const addPost = (post: PostData) => {
    const newPost = {
      ...post,
      userId: Date.now()
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  const enhancedPageProps = {
    ...pageProps,
    posts,
    addPost,
  };

  return (
    <>
      <Component {...enhancedPageProps} />
    </>
  );
}
