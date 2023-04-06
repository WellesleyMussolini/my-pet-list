import styles from "./nav.module.css";

export const Navigate = ({ navList, property }) => {
    return (
        <div className={styles.navigation}>
            {
                navList.map((item, index) => <li key={index}><a>{item[property]}</a></li>)
            }
        </div>
    )
};