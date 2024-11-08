import {User} from "../types";
import "./UserCard.css";

interface UserCardProps{
    user: User;
}   

const UserCard = (props: UserCardProps) => {
    return (
        <div className="user-card">
            <h2>{props.user.name}</h2>
            <p>Age: {props.user.age}</p>
            <p
      className={
        props.user.isOnLine ? "user-card--online" : "user-card--offline"
      }
    >
      {props.user.isOnLine ? "Online" : "Offline"}
    </p>
        </div>
    )
}

export default UserCard;