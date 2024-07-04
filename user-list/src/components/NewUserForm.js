import styles from './NewUserForm.module.css';
import React, {useState} from "react";
import ErrorMessage from "./ErrorMessage";

const NewUserForm = (props) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [showError, setShowError] = useState(false);

    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }

    const ageChangeHandler = (e) => {
        setAge(e.target.value);
    }

    const submitFormHandler = (e) => {
        e.preventDefault();
        if (!name) {
            setShowError({title: "Ошибка", message: "Имя обязательно!"});
        }
        else if (age < 1) {
            setShowError({title: "Ошибка", message: "Возраст не менее 1!"});
        }
        else {
            props.onAddUser({name: name, age: age, id: Math.random().toString()});
            setName("");
            setAge("");
        }
    }

    const onCloseModal = () => {
        setShowError(false);
    }

    const resetFormHandler = (e) => {
        e.preventDefault();
        setName("");
        setAge("");
    }


    return (
        <div className={styles.input}>
            {showError && (
                <ErrorMessage onCloseModal={onCloseModal}
                              title={showError.title}
                              message = {showError.message}
                />
            )}
            <form onSubmit={submitFormHandler} onReset={resetFormHandler}>
                <label htmlFor="name">Имя</label>
                <input id="name" type="text" maxLength="150" onChange={nameChangeHandler} value={name} name="name" />
                <label htmlFor="age">Возраст</label>
                <input id="age" type="number" min="1" step="1" onChange={ageChangeHandler} value={age} name="age" />
                <hr/>
                <button type="submit">Создать</button>
            </form>
        </div>
    )
}

export default NewUserForm;