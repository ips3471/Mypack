import React from 'react';
import styles from './category-component.module.css'
import ItemForm from '../itemForm/itemForm';
import Buttons from '../buttons/buttons';
import { DeleteItem, Item, ItemCategory, UpdateItem } from '../main/main';

interface CategoryComponentProps {
    titleName: ItemCategory;
    categoryArray: Item[];
    updateChanges: UpdateItem;
    deleteItem: DeleteItem;
}
type SetTitle = (titleName: ItemCategory) => string;

const CategoryComponent = ({titleName, categoryArray, deleteItem, updateChanges}: CategoryComponentProps) => {
    const onAddClick = () => {
        const itemForm: Item = {
            id: Date.now(),
            category: titleName,
            state: true,
            producer: '',
            name: '',
            weight: '',
            price: '',
            comment: '',
        }
        setTimeout(() => {
            updateChanges(itemForm)
        }, 300);
    }
    const titleSelector = {titleName}.titleName;
    const setTitle: SetTitle = (titleSelector) => {
        switch(titleSelector) {
        case 'essential':
            return 'Essential: 🎒 🏕  ';
        case 'cookware':
            return '조리';
        case 'equipment':
            return '비품';
        case 'clothes':
            return '의류';
        case 'etc':
            return '기타';
        }
    }
    
    return (
    <div className={styles.editor_form__container}>
    <h2>{setTitle(titleSelector)}</h2>
    <ul className={styles.categories}>
    {
        categoryArray.map((item: Item) => (
            <ItemForm 
            key={item.id}
            item={item} 
            deleteItem={deleteItem} 
            updateChanges={updateChanges} />
        ))
    }
    </ul>
    <Buttons selector="add" callback={onAddClick} />
    </div>    
)};

export default CategoryComponent;