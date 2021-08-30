import React from 'react';
import styles from './overview.module.css';
import { Item, Items } from '../main/main';
import OverviewForm from '../overviewForm/overviewForm';
import OverviewChart from '../overview-chart/overview-chart';

export type ItemOverview = (itemsProps: OverviewProps) => any;
interface OverviewProps {
    items: Items;
}

const Overview: ItemOverview = ({items}: OverviewProps) => {
    const ItemsArr = Object.keys(items).map((key) => (items[key]));
    const pickedItems = ItemsArr
    .filter(item=>item.state === true)
    .sort((b, a) => Number(a.weight) - Number(b.weight));

    return (
        <div className={styles.overview}>
            <h1 className={styles.title}>선택된 장비</h1>
            <div className={styles.overview__container}>
                <OverviewChart pickedItems={pickedItems} />
                <ul className={styles.items}>
                    {
                        pickedItems.map((item: Item) => (
                            <OverviewForm key={item.id} item={item} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )};

export default Overview;