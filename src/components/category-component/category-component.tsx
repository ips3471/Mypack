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
            return '필수장비: ';
        case 'cookware':
            return '취사용품: ';
        case 'equipment':
            return '편의장비: ';
        case 'clothes':
            return '의류용품: ';
        case 'etc':
            return '기타장비: ';
        }
    }
    const setDesc: SetTitle = (titleSelector) => {
        switch(titleSelector) {
        case 'essential':
            return '배낭, 침낭, 텐트, 매트, ...';
        case 'cookware':
            return '버너, 코펠, 수저, ...';
        case 'equipment':
            return '타프, 쉘터, 테이블, 의자, ...';
        case 'clothes':
            return '모자, 등산화, 하드쉘, 소프트쉘, ...';
        case 'etc':
            return '보조배터리, 스마트워치, 핫팩, ...';
        }
    }
    
    return (
    <div className={styles.editor_form__container}>
        <div>
            <span className={styles.category_title}>{setTitle(titleSelector)}</span>
            <span className={styles.category_desc}>{setDesc(titleSelector)}</span>
        </div>
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