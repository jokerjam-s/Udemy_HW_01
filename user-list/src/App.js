import logo from './logo.svg';
import './App.css';
import './components/UserInfo';
import UserInfo from "./components/UserInfo";
import NewUserForm from "./components/NewUserForm";

function App() {
    const users = [
        {name: 'Иван', age: 20},
        {name: 'Петр', age: 25},
    ]


    return (
        <div className="App">
            <h1>Управление пользователями</h1>
            <NewUserForm/>
            <UserInfo users={users} />
        </div>
    );
}

export default App;
