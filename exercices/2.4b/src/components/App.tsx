import { User } from "../types";
import UserCard from "./UserCard";

const users : User[] = [
    {
        name: "John",
        age: 25,
        isOnLine: true
    },
    {
        name: "Jane",
        age: 23,
        isOnLine: false
    },
    {
        name: "Doe",
        age: 30,
        isOnLine: true
    }
]

const App = () => {
    return (
        <div>
            <h1>Users</h1>
            {users.map((user, index) => (
                <UserCard key={index} user={user} />
            ))}
        </div>
    )
}

export default App
