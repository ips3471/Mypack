import { useContext } from 'react';
import { AuthContext } from '../..';
import styles from './header.module.css';

const Header = () => {
    const authService = useContext(AuthContext);
    const onLogoutClick = () => {
        authService.logout();
    }
    return(
        <div className={styles.header}>
            <ul className={styles.btns}>
                <li className={styles.btn_container}>
                    <button className={styles.btn}>maker</button>
                </li>
                <li className={styles.btn_container}>
                    <button className={styles.btn}>my pack</button>
                </li>
                <li className={`${styles.btn_container} ${styles.logout_btn}`}>
                    <button onClick={onLogoutClick} className={styles.btn}>logout</button>
                </li>
            </ul>
        </div>
    )};

export default Header;