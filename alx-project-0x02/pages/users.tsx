import { Geist, Geist_Mono } from "next/font/google";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {


    return (
        <div className={`${geistSans.className} ${geistMono.className} flex flex-col min-h-screen items-center p-8 dark:bg-black`}>
            <Header />
            {/* <h1 className="text-4xl font-bold mb-8 text-white">Users</h1> */}
            <div className="grid grid-cols-1 mt-3 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
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

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()

    return { props: { users } }
}