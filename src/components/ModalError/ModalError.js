import Button from "../Button/Button";
import styles from "./ModalError.module.css";

const ModalError = (props) => {
   const hideModal = () => {
      props.setErrorMsg("");
      props.setEnteredName("");
      props.setEnteredAge("");
   };

   return (
      <div className={styles.modalWrapper} onClick={hideModal}>
         <div className={styles.modal}>
            <h2 className={styles["modal-title"]}>Invalid Input</h2>
            <p>{props.errorMsg}</p>
            <Button type="button" title="Okay" onClick={hideModal}></Button>
         </div>
      </div>
   );
};

export default ModalError;
