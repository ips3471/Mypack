import { memo, useContext } from 'react';
import { AuthContext } from '../..';
import styles from './header.module.css';
import { faListUl, faSignOutAlt, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = memo(({setUserId, user}: any) => {
    console.log('header update');
    const authService = useContext(AuthContext);
    const onLogoutClick = () => {
        if(user) {
            authService.logout();
            setUserId(null);
            console.log('clicked logout');
        } else {
            console.log(`empty user: ${user}`);
        }
    }
    return(
        <div className={styles.header}>
            <ul className={styles.btns}>
                <li>
                    <h1 className={styles.title}>My pack</h1>
                </li>
                <div className={styles.btns__contents}>
                    <li className={styles.btn_container}>
                        <button className={styles.btn}>
                            <FontAwesomeIcon className={styles.btn__icon} icon={faListUl} />
                        </button>
                    </li>
                    <li className={styles.btn_container}>
                        <button className={`${styles.btn} ${styles.btn_pack}`}>
                            <FontAwesomeIcon className={styles.btn__icon} icon={faSuitcaseRolling} />
                        </button>
                    </li>
                </div>
                <li className={`${styles.btn_container} ${styles.logout_btn}`}>
                    <button onClick={onLogoutClick} className={`${styles.btn} ${styles.btn_logout}`}>
                        <FontAwesomeIcon className={styles.btn__icon} icon={faSignOutAlt} />
                    </button>
                </li>
            </ul>
        </div>
    )});

export default Header;