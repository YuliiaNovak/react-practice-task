import styles from "./App.module.css";
import UserForm from "./components/UserForm/UserForm";
import UserCards from "./components/UserCard/UserCards";
import { useState } from "react";

const users = [];

function App() {
   const [usersData, setUsersData] = useState(users);

   const addUsersHandler = (user) => {
      setUsersData((prevUsersData) => {
         return [user, ...prevUsersData];
      });
   };

   return (
      <div className={styles.parent}>
         <UserForm onAddUsersHandler={addUsersHandler} />
         <UserCards users={usersData} />
      </div>
   );
}

export default App;
