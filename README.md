# “Next.js Project Setup and Basics

This is a sample project built with Next.js and TypeScript, demonstrating a simplified, Airbnb-style user interface for displaying and adding new listings.

## Project Overview

The application showcases fundamental concepts of modern web development with Next.js, including state management, component-based architecture, and dynamic content rendering. The core functionality revolves around displaying a grid of property listings and allowing users to add new listings via a modal form.

## Features

- **Dynamic Listing Display**: Fetches and displays a grid of property listings on the `/home` page.
- **Add New Listing**: Users can open a modal from the `/` page to add a new listing.
- **Real-Time Updates**: New listings added through the modal are immediately reflected on the `/home` page without a page refresh.
- **Centralized State Management**: Utilizes React's `useState` hook and the "lifting state up" pattern in `_app.tsx` to manage application-wide state.
- **Component-Based Architecture**: Built with reusable React components for UI elements like cards and modals.
- **TypeScript Integration**: Fully typed for improved developer experience and code quality.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn/pnpm) installed on your machine.
- Node.js (v18.x or later recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd alx-project-2
   ```
3. Install NPM packages:
   ```sh
   npm install
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages & Functionality

- **`/` (Index Page)**: The main landing page which contains the "Create New Post" button to trigger the modal.
- **`/home` (Home Page)**: Displays the grid of all property listings. This page is updated in real-time when a new post is added.
- **`/api/hello`**: A sample API route provided by Next.js.

## Key Concepts Implemented

- **Lifting State Up**: The shared state (the list of posts) is managed in the top-level `_app.tsx` component.
- **Props Drilling**: The `posts` state and the `addPost` function are passed down from `_app.tsx` to the relevant page components.
- **Conditional Rendering**: The `PostModal` is only rendered when the `isModalOpen` state is `true`.
- **Interfaces**: TypeScript interfaces (`CardProps`, `PostData`, `PostProps`) are used to define the shape of data and props, ensuring type safety.