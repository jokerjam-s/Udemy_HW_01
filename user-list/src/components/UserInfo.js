import styles from "./UserInfo.module.css";


const UserInfo = ((props) => {
    return (
        <div className={styles.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age} лет.</li>
                ))}
            </ul>
        </div>
    )
})

export default UserInfo;