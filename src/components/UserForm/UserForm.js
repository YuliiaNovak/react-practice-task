import { useState } from "react";
import Button from "../Button/Button";
import ModalError from "../ModalError/ModalError";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
   const [enteredName, setEnteredName] = useState("");
   const [enteredAge, setEnteredAge] = useState("");
   const [errorMsg, setErrorMsg] = useState("");

   const nameChangeHandler = (e) => {
      setEnteredName(e.target.value);
   };

   const ageChangeHandler = (e) => {
      setEnteredAge(e.target.value);
   };

   const submitHandler = (e) => {
      e.preventDefault();
      if (enteredName.trim().length <= 0 || enteredAge.length <= 0)
         return setErrorMsg(
            "Please enter a valid name and age (non-empty values)."
         );
      if (enteredAge <= 0)
         return setErrorMsg("Please enter a valid age (> 0).");
      const userData = {
         name: enteredName,
         age: enteredAge,
         id: Math.random().toString(),
      };
      props.onAddUsersHandler(userData);
      setEnteredName("");
      setEnteredAge("");
   };

   return (
      <div>
         <form className={styles.form}>
            <div className="user-inputs__controls">
               <div className="user-input__control">
                  <label htmlFor="username">Username</label>
                  <input
                     id="username"
                     type="text"
                     value={enteredName}
                     onChange={nameChangeHandler}
                  />
               </div>
               <div className="user-input__control">
                  <label htmlFor="age">User age</label>
                  <input
                     id="age"
                     type="number"
                     value={enteredAge}
                     onChange={ageChangeHandler}
                  />
               </div>
            </div>
            <div className="user-actions">
               <Button
                  type="submit"
                  onClick={submitHandler}
                  title="Add User"
               ></Button>
            </div>
         </form>
         {errorMsg && (
            <ModalError
               errorMsg={errorMsg}
               setErrorMsg={setErrorMsg}
               setEnteredName={setEnteredName}
               setEnteredAge={setEnteredAge}
            />
         )}
      </div>
   );
};

export default UserForm;
