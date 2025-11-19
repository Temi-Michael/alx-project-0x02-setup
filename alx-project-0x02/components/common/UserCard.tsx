import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
    return (
        <div className="border border-gray-700 rounded-lg p-4 text-white flex flex-col gap-2">
            <h2 className="text-xl font-bold text-cyan-400">{name}</h2>
            <p className="text-gray-300">{email}</p>
            <p className="text-gray-400 text-sm">{address}</p>
        </div>
    )
}

export default UserCard