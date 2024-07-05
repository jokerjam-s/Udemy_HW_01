import { Fragment } from 'react';
import ReactDom from 'react-dom';
import styles from './ErrorMessage.module.css';

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onCloseModal}></div>;
};

const Modal = (props) => {
    return (
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
    );
};

const ErrorMessage = (props) => {

    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onCloseModal={props.onCloseModal} />, document.getElementById('backdrop'))};
            {ReactDom.createPortal(
                <Modal
                    onCloseModal={props.onCloseModal}
                    title={props.title}
                    message={props.message}
                />,
                document.getElementById('modal'))};
        </Fragment>
    )
}

export default ErrorMessage;