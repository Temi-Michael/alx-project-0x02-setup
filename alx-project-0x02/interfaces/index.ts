export interface CardProps {
  userId: number;
  title: string;
  content: string;
}

export interface PostProps {
  userId: number;
  title: string;
  content: string;
}

export interface PostData {
  title: string;
  content: string;
}

export interface PostProp extends CardProps {
  onClose: () => void;
  addPost?: (post: PostData) => void;
}

export interface ButtonProps {
  text: string;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-lg";
}

export interface UserProps {
  name: string;
  email: string;
  address: string;
}
