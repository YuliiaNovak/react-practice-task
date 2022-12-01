import UserCard from "./UserCard";
import styles from "./UserCards.module.css";

const UserCards = (props) => {
   return (
      <div className={styles["cards-container"]}>
         {props.users.map((user) => (
            <UserCard key={user.id} user={user} />
         ))}
      </div>
   );
};

export default UserCards;
