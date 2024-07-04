import styles from './ErrorMessage.module.css';

const ErrorMessage = (props) => {

    return (
        <div>
            <div className={styles.backdrop} onClick={props.onCloseModal}></div>

            <div className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <button onClick={props.onCloseModal}>Закрыть</button>
                </footer>
            </div>
        </div>
    )
}

export default ErrorMessage;