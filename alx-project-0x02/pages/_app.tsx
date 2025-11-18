import Header from "@/components/layout/Header";
import { multipleCardContents } from "@/constants";
import { CardProps, PostData } from "@/interfaces";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [posts, setPosts] = useState<CardProps[]>(multipleCardContents);

  const addPost = (post: PostData) => {
    setPosts((prevPosts) => [...prevPosts, { ...post }]);
  };

  const enhancedPageProps = {
    ...pageProps,
    posts,
    addPost,
  };

  return (
    <>
      <Header />
      <Component {...enhancedPageProps} />
    </>
  );
}
