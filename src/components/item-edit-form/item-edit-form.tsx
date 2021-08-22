import React from 'react';
import Buttons from '../buttons/buttons';
import ItemForm from '../itemForm/itemForm';
import { Item, ItemCategory, Items } from '../main/main';
import styles from './item-edit-form.module.css';


export interface ItemEditProps {
    items: Items;
    makeEditForm?: (categoryName: ItemCategory) => void;
}

export const EssentialItemEditForm = ({items, makeEditForm}: ItemEditProps) => (
    <>
        <ul className={styles.ctrg__essential}>
        <h2>ctrg__essential</h2>
        {
            items.map((item: Item) => (
            <div className={styles.editor_form__container}>
                <ItemForm item={item} />
                <Buttons selector={'delete'} />
            </div>
            ))
        }
    </ul>
    <Buttons makeEditForm={makeEditForm} category={'essential'} selector={'add'} />
    </>
        );
        
export const CookwareItemEditForm = ({items, makeEditForm}: ItemEditProps) => (
    <>
        <ul className={styles.ctrg__cookware}>
        <h2>ctrg__cookware</h2>
        {
            items.map((item: Item) => (
            <div className={styles.editor_form__container}>
                <ItemForm item={item} />
                <Buttons selector={'delete'} />
            </div>
            ))
        }
    </ul>
    <Buttons makeEditForm={makeEditForm} category={'cookware'} selector={'add'} />
    </>
    
)

export const EquipmentItemEditForm = ({items, makeEditForm}: ItemEditProps) => (
    <>
        <ul className={styles.ctrg__equiment}>
        <h2>ctrg__equiment</h2>
        {
            items.map((item: Item) => (
            <div className={styles.editor_form__container}>
                <ItemForm item={item} />
                <Buttons selector={'delete'} />
            </div>
            ))
        }
    </ul>
    <Buttons makeEditForm={makeEditForm} category={'equipment'} selector={'add'} />
    </>
)

export const ClothesItemEditForm = ({items, makeEditForm}: ItemEditProps) => (
    <>
        <ul className={styles.ctrg__clothes}>
        <h2>ctrg__clothes</h2>
        {
            items.map((item: Item) => (
            <div className={styles.editor_form__container}>
                <ItemForm item={item} />
                <Buttons selector={'delete'} />
            </div>
            ))
        }
    </ul>
    <Buttons makeEditForm={makeEditForm} category={'clothes'} selector={'add'} />
    </>
)
export const EtcItemEditForm = ({items, makeEditForm}: ItemEditProps) => (
    <>
        <ul className={styles.ctrg__etc}>
        <h2>ctrg__etc</h2>
        {
            items.map((item: Item) => (
            <div className={styles.editor_form__container}>
                <ItemForm item={item} />
                <Buttons selector={'delete'} />
            </div>
            ))
        }
    </ul>
    <Buttons makeEditForm={makeEditForm} category={'etc'} selector={'add'} />
    </>
)
    
    
    
    
    
    


