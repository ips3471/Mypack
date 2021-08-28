import React from 'react';
import CategoryComponent from '../category-component/category-component';
import { DeleteItem, Items, UpdateItem } from '../main/main';


export interface ItemEditProps {
    items: Items;
    updateChanges: UpdateItem;
    deleteItem: DeleteItem;
}

const ItemEditForm = ({items, deleteItem, updateChanges}: ItemEditProps) => {
    const essentialIndex = Object.keys(items).filter(key => items[key].category === 'essential')
    const essentialItems = essentialIndex.map(index => (
        items[index]
    ))
    const cookwareIndex = Object.keys(items).filter(key => items[key].category === 'cookware')
    const cookwareItems = cookwareIndex.map(index => (
        items[index]
    ))
    const equipmentIndex = Object.keys(items).filter(key => items[key].category === 'equipment')
    const equipmentItems = equipmentIndex.map(index => (
        items[index]
    ))
    const clothesIndex = Object.keys(items).filter(key => items[key].category === 'clothes')
    const clothesItems = clothesIndex.map(index => (
        items[index]
    ))
    const etcIndex = Object.keys(items).filter(key => items[key].category === 'etc')
    const etcItems = etcIndex.map(index => (
        items[index]
    ))
    
    return (
        <>
        <CategoryComponent 
        titleName='essential'
        categoryArray={essentialItems}
        updateChanges={updateChanges}
        deleteItem={deleteItem}
        />
        <CategoryComponent 
        titleName='cookware' 
        categoryArray={cookwareItems}
        updateChanges={updateChanges}
        deleteItem={deleteItem}
        />
        <CategoryComponent 
        titleName='equipment' 
        categoryArray={equipmentItems}
        updateChanges={updateChanges}
        deleteItem={deleteItem}
        />
        <CategoryComponent 
        titleName='clothes' 
        categoryArray={clothesItems}
        updateChanges={updateChanges}
        deleteItem={deleteItem}
        />
        <CategoryComponent 
        titleName='etc' 
        categoryArray={etcItems}
        updateChanges={updateChanges}
        deleteItem={deleteItem}
        />
        </>
    )
}


export default ItemEditForm;



