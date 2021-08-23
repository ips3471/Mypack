import React from 'react';
import styles from './buttons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { DeleteItem, Item, ItemCategory, MakeItem } from '../main/main';

interface ButtonsProps {
    selector: 'add' | 'delete';
    category?: 'essential' | 'cookware' | 'equipment' | 'clothes' | 'etc';
    makeEditForm: MakeItem;
    deleteItem: DeleteItem;
    item?: Item;
}

const Buttons = ({selector, category, makeEditForm, deleteItem, item}: ButtonsProps) => { 
    const selectorName = {selector}.selector;
    const categoryName: ItemCategory = {category}.category!;

    const onClick = () => {
        if (!makeEditForm) {
            throw new Error('makeEditForm not found');
        }
        else if (!item) {
            return makeEditForm(categoryName);
        }
        switch(selectorName) {
            case 'add':
                return makeEditForm(categoryName);
            case 'delete':
                return deleteItem(item.id);
            default:
                throw new Error(`${selectorName} is not supported selector type`);
        }
    }

    return(
        <button onClick={onClick} className={`${styles.button} ${getSelector(selectorName)}` }>
        {selectorName === 'add' && <FontAwesomeIcon className={styles.button_icon} icon={faPlus} />}
        {selectorName === 'delete' && <FontAwesomeIcon className={styles.button_icon} icon={faTrashAlt} />}
        </button>
    )

    function getSelector(selectorName: string) {
        switch(selectorName) {
            case 'add':
                return styles.add;
            case 'delete':
                return styles.delete;
            default:
                throw new Error(`${selectorName} is not supported type`);
        }
    }
};



export default Buttons;