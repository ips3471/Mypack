import React from 'react';
import styles from './overview.module.css';
import { Item, Items } from '../main/main';
import OverviewForm from '../overviewForm/overviewForm';

export type ItemOverview = (itemsProps: OverviewProps) => any;
interface OverviewProps {
    items: Items;
}

const Overview: ItemOverview = ({items}: OverviewProps) => {
    const originalItems = Object.keys(items).map((key) => (items[key]));
    const pickedItems = originalItems.filter(item=>item.state === true);
    return (
        <div className={styles.overview}>
            <h1 className={styles.title}>선택된 장비</h1>
            <ul className={styles.items}>
                {
                    pickedItems.map((item: Item) => (
                        <OverviewForm key={item.id} item={item} />
                    ))
                }
            </ul>
        </div>
    )};

export default Overview;