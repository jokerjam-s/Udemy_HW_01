import logo from './logo.svg';
import './App.css';
import './components/UserInfo';
import UserInfo from "./components/UserInfo";
import React, {useState} from "react";
import NewUserForm from "./components/NewUserForm";

function App() {
    const [users, setUsers] =
        useState([
            {name: 'Иван', age: 20, id: Math.random().toString()},
            {name: 'Петр', age: 25, id: Math.random().toString()},
        ]);

    const addUser = (user) => {
        setUsers(prevUsers => {
            return [...prevUsers, user];
        });
    }

    return (
        <React.Fragment>
            <h1>Управление пользователями</h1>
            <NewUserForm onAddUser={addUser} />
            <UserInfo users={users}/>
        </React.Fragment>
    );
}

export default App;
