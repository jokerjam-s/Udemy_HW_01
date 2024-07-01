import styles from './NewUserForm.module.css';
import {Component} from "react";

const NewUserForm = (props) => {
    p

    return (
        <div className={styles.input}>
            <form onSubmit={} onReset={}>
                <label htmlFor="name">Имя</label>
                <input id="name" type="text" maxLength="150"/>
                <label htmlFor="age">Возраст</label>
                <input id="age" type="number" min="1" step="1" />
                <hr/>
                <button type="submit">Создать</button>
            </form>
        </div>
    )
}

export default NewUserForm;