import React from 'react';
import styles from './overview.module.css';
import { Item, Items } from '../main/main';
import OverviewForm from '../overviewForm/overviewForm';

export type ItemOverview = (itemsProps: OverviewProps) => any;
interface OverviewProps {
    items: Items;
}

const Overview: ItemOverview = ({items}: OverviewProps) => (
        <div className={styles.overview}>
            <h1>overview</h1>
            <ul className={styles.items}>
                {
                    items.map((item: Item) => (
                        <OverviewForm item={item} />
                    ))
                }
            </ul>
        </div>
    );

export default Overview;