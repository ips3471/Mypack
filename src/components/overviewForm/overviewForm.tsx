import React from 'react';
import { Item } from '../main/main';
import styles from './overviewForm.module.css';

interface OverviewFormProps {
    item: Item;
}

const OverviewForm = ({item}: OverviewFormProps) => (
    <li className={styles.item}>
        <span className={styles.item_state}>{item.state}</span>
        <div className={styles.item_info_container}>
            <span className={styles.item_producer}>{item.producer}</span>
            <span className={styles.item_name}>{item.name}</span>
        </div>
        <span className={styles.item_weight}>{item.weight}</span>
    </li>
    );

export default OverviewForm;