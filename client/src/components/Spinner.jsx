import styles from "./Spinner.module.css";

export function Spinner() {
    return (
        <div className={styles.loader}>
            <div className={styles.loaderPrueba}>
                <span></span>
            </div>       
        </div>
    )
}