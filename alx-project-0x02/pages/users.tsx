import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import UserCard from "@/components/common/UserCard";

// Define the shape of the User object coming from the API
interface ApiUser {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
}

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const getUsers = async (url: string): Promise<ApiUser[]> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}

const Users: React.FC = () => {
    const [users, setUsers] = useState<ApiUser[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await getUsers("https://jsonplaceholder.typicode.com/users");
                setUsers(fetchedUsers);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred while fetching users.");
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (isLoading) {
        return <div className="text-white flex min-h-screen justify-center items-center">Loading users...</div>;
    }

    if (error) {
        return <div className="text-red-500 flex min-h-screen justify-center items-center">Error: {error}</div>;
    }

    return (
        <div className={`${geistSans.className} ${geistMono.className} flex flex-col min-h-screen items-center p-8 dark:bg-black`}>
            <h1 className="text-4xl font-bold mb-8 text-white">Users</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {users.map((user) => {
                    // Format the address object into a string
                    const formattedAddress = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
                    
                    return (
                        <UserCard
                            key={user.id}
                            name={user.name}
                            email={user.email}
                            address={formattedAddress}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Users;
