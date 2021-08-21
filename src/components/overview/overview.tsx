import React from 'react';
import styles from './overview.module.css';

const Overview = () => (
        <div className={styles.overview}>
            <h1>overview</h1>
            <ul className={styles.items}>
                <li className={styles.item}>
                    <span className={styles.item_state}>Active</span>
                    <div className={styles.item_info_container}>
                        <span className={styles.item_producer}>Zerogram</span>
                        <span className={styles.item_name}>Thruhiker</span>
                    </div>
                    <span className={styles.item_weight}>1000</span>
                </li>
                <li className={styles.item}>
                    <span className={`${styles.item_state} ${styles.inactive}`}>Inactive</span>
                    <div className={styles.item_info_container}>
                        <span className={styles.item_producer}>MSR</span>
                        <span className={styles.item_name}>Stake-hammer</span>
                    </div>
                    <span className={styles.item_weight}>250</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.item_state}>Active</span>
                    <div className={styles.item_info_container}>
                        <span className={styles.item_producer}>Sierra Designs</span>
                        <span className={styles.item_name}>Flex-capacitor</span>
                    </div>
                    <span className={styles.item_weight}>1100</span>
                </li>
            </ul>
        </div>
    );

export default Overview;