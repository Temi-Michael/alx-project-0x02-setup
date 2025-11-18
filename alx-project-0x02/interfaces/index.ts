export interface CardProps {
  title: string;
  content: string;
}

export interface PostData {
  title: string;
  content: string;
}

export interface PostProps extends PostData {
  onClose: () => void;
  addPost?: (post: PostData) => void;
}
