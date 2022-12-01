import styles from "./UserCard.module.css";

const UserCard = (props) => {
   const determineAge = (age) => {
      return age === "1" ? "year old" : "years old";
   };

   return (
      <div className={styles.card}>
         {props.user.name}, {props.user.age} {determineAge(props.user.age)}
      </div>
   );
};

export default UserCard;
