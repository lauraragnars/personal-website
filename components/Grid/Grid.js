import styles from './Grid.module.scss';

export default function Grid() {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.gridContainer__line}></div>
            <div className={styles.gridContainer__line}></div>
            <div className={styles.gridContainer__line}></div>
            <div className={styles.gridContainer__line}></div>
            <div className={styles.gridContainer__line}></div>
            <div className={styles.gridContainer__line}></div>
            <div className={styles.gridContainer__line}></div>

            <div>
                <div className={styles.gridContainer__hozLine}></div>
                <div className={styles.gridContainer__hozLine}></div>
                <div className={styles.gridContainer__hozLine}></div>
                <div className={styles.gridContainer__hozLine}></div>
                <div className={styles.gridContainer__hozLine}></div>
                <div className={styles.gridContainer__hozLine}></div>
                <div className={styles.gridContainer__hozLine}></div>
                <div className={styles.gridContainer__hozLine}></div>
                <div className={styles.gridContainer__hozLine}></div>
                <div className={styles.gridContainer__hozLine}></div>
            </div>
        </div>
    );
}
