import React from 'react';
import Buttons from '../buttons/buttons';
import ItemForm from '../itemForm/itemForm';
import { DeleteItem, Item, ItemCategory, Items, MakeItem } from '../main/main';
import styles from './item-edit-form.module.css';


export interface ItemEditProps {
    items: Items;
    makeEditForm: MakeItem;
    deleteItem: DeleteItem;
}


export const EssentialItemEditForm = ({items, makeEditForm, deleteItem}: ItemEditProps) => (
            <>
                <ul className={styles.ctrg__essential}>
                <h2>ctrg__essential</h2>
                {
                    items.map((item: Item) => (
                    <div className={styles.editor_form__container}>
                        <ItemForm item={item} />
                        <Buttons key={item.id} item={item} selector={'delete'} makeEditForm={makeEditForm} deleteItem={deleteItem} />
                    </div>
                    ))
                }
            </ul>
            <Buttons makeEditForm={makeEditForm} deleteItem={deleteItem} category={'essential'} selector={'add'} />
            </>
);
        
export const CookwareItemEditForm = ({items, makeEditForm, deleteItem}: ItemEditProps) => (
    <>
        <ul className={styles.ctrg__cookware}>
        <h2>ctrg__cookware</h2>
        {
            items.map((item: Item) => (
            <div className={styles.editor_form__container}>
                <ItemForm item={item} />
                <Buttons key={item.id} item={item} selector={'delete'} makeEditForm={makeEditForm} deleteItem={deleteItem} />
            </div>
            ))
        }
    </ul>
    <Buttons makeEditForm={makeEditForm} deleteItem={deleteItem} category={'cookware'} selector={'add'} />
    </>
    
)

export const EquipmentItemEditForm = ({items, makeEditForm, deleteItem}: ItemEditProps) => (
    <>
        <ul className={styles.ctrg__equiment}>
        <h2>ctrg__equiment</h2>
        {
            items.map((item: Item) => (
            <div className={styles.editor_form__container}>
                <ItemForm item={item} />
                <Buttons key={item.id} item={item} selector={'delete'} makeEditForm={makeEditForm} deleteItem={deleteItem} />
            </div>
            ))
        }
    </ul>
    <Buttons makeEditForm={makeEditForm} deleteItem={deleteItem} category={'equipment'} selector={'add'} />
    </>
)

export const ClothesItemEditForm = ({items, makeEditForm, deleteItem}: ItemEditProps) => (
    <>
        <ul className={styles.ctrg__clothes}>
        <h2>ctrg__clothes</h2>
        {
            items.map((item: Item) => (
            <div className={styles.editor_form__container}>
                <ItemForm item={item} />
                <Buttons key={item.id} item={item} selector={'delete'} makeEditForm={makeEditForm} deleteItem={deleteItem} />
            </div>
            ))
        }
    </ul>
    <Buttons makeEditForm={makeEditForm} deleteItem={deleteItem} category={'clothes'} selector={'add'} />
    </>
)
export const EtcItemEditForm = ({items, makeEditForm, deleteItem}: ItemEditProps) => (
    <>
        <ul className={styles.ctrg__etc}>
        <h2>ctrg__etc</h2>
        {
            items.map((item: Item) => (
            <div className={styles.editor_form__container}>
                <ItemForm item={item} />
                <Buttons key={item.id} item={item} selector={'delete'} makeEditForm={makeEditForm} deleteItem={deleteItem} />
            </div>
            ))
        }
    </ul>
    <Buttons makeEditForm={makeEditForm} deleteItem={deleteItem} category={'etc'} selector={'add'} />
    </>
)
    
    
    
    
    
    


