import styles from './NewUserForm.module.css';
import React, { useState, useRef, Fragment } from "react";
import ErrorMessage from "./ErrorMessage";

const NewUserForm = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [showError, setShowError] = useState(false);

    const submitFormHandler = (e) => {
        e.preventDefault();

        const userName = nameInputRef.current.value;
        const userAge = ageInputRef.current.value;

        if (!userName) {
            setShowError({ title: "Ошибка", message: "Имя обязательно!" });
        }
        else if (+userAge < 1) {
            setShowError({ title: "Ошибка", message: "Возраст не менее 1!" });
        }
        else {
            props.onAddUser({ name: userName, age: userAge, id: Math.random().toString() });
            nameInputRef.current.value = "";
            ageInputRef.current.value = "";
        }
    }

    const onCloseModal = () => {
        setShowError(false);
    }

    const resetFormHandler = (e) => {
        e.preventDefault();
    }

    return (
        <Fragment>
            {showError && (
                <ErrorMessage
                    onCloseModal={onCloseModal}
                    title={showError.title}
                    message={showError.message}
                />
            )}
            <div className={styles.input}>
                <form onSubmit={submitFormHandler} onReset={resetFormHandler}>
                    <label htmlFor="name">Имя</label>
                    <input 
                        id="name" 
                        type="text" 
                        maxLength="150" 
                        name="name" 
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Возраст</label>
                    <input 
                        id="age" 
                        type="number" 
                        min="1" step="1" 
                        name="age" 
                        ref={ageInputRef}
                    />
                    <hr />
                    <button type="submit">Создать</button>
                </form>
            </div>
        </Fragment>
    )
}

export default NewUserForm;