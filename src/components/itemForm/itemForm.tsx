import React from 'react';
import { Item } from '../main/main';
import styles from './itemForm.module.css';

interface ItemProps {
    item: Item;
}
const ItemForm = ({item}: ItemProps) => (
    <li>
        <form className={styles.editor_form}>
            <div className={styles.checkbox__container}>
                <input type="checkbox" id={item.id}  />    
                <label htmlFor={item.id}>Pick</label>
            </div>
            <input value={item.producer} className={styles.producer} type="text" placeholder="producer"/>
            <input value={item.name} className={styles.name} type="text" placeholder="name"/>
            <input value={item.weight} className={styles.weight} type="number" placeholder="g"/>
            <input value={item.price} className={styles.price} type="text" placeholder="₩"/>
            <input value={item.comment} className={styles.comment} type="text" placeholder="comment"/>
        </form>
    </li>            
    );


export default ItemForm;