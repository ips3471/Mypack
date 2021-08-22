import React from 'react';
import styles from './buttons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ItemCategory } from '../main/main';

interface ButtonsProps {
    selector: 'add' | 'delete';
    category?: 'essential' | 'cookware' | 'equipment' | 'clothes' | 'etc';
    makeEditForm?: (categoryName: ItemCategory) => void;
}

const Buttons = ({selector, category, makeEditForm}: ButtonsProps) => { 
    const selectorName: string = {selector}.selector;
    const categoryName: ItemCategory = {category}.category!;
    const onAddClick = () => {
        if(!makeEditForm) {
            throw new Error(`${makeEditForm}: buttons.tsx`)
        }
        makeEditForm(categoryName);
    }

    return(
        <button onClick={onAddClick} className={`${styles.button} ${getSelector(selectorName)}` }>
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