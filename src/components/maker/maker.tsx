import {
    ClothesItemEditForm, 
    CookwareItemEditForm, 
    EquipmentItemEditForm, 
    EssentialItemEditForm, 
    EtcItemEditForm
} from '../item-edit-form/item-edit-form';
import { DeleteItem, Item, ItemCategory, Items, MakeItem } from '../main/main';
import styles from './maker.module.css';

interface MakerProps {
    items: Items;
    makeEditForm: MakeItem;
    deleteItem: DeleteItem;
}

const Maker = ({items, makeEditForm, deleteItem}: MakerProps) => {
    const essentialItem = items.filter((item: Item) => (
        item.category === 'essential'
    ));
    const cookwareItem = items.filter((item: Item) => (
        item.category === 'cookware'
    ));
    const equipmentItem = items.filter((item: Item) => (
        item.category === 'equipment'
    ));
    const clothesItem = items.filter((item: Item) => (
        item.category === 'clothes'
    ));
    const etcItem = items.filter((item: Item) => (
        item.category === 'etc'
    ));

    return (
        <div className={styles.maker}>
            <h1>maker</h1>
            <div className={styles.editor}>
                <h2>editor</h2>
                <div className={styles.editor_ctrg}>
                        <EssentialItemEditForm makeEditForm={makeEditForm} items={essentialItem} deleteItem={deleteItem} />
                        <CookwareItemEditForm makeEditForm={makeEditForm} items={cookwareItem} deleteItem={deleteItem} />
                        <EquipmentItemEditForm makeEditForm={makeEditForm} items={equipmentItem} deleteItem={deleteItem}/>
                        <ClothesItemEditForm makeEditForm={makeEditForm} items={clothesItem} deleteItem={deleteItem}/>
                        <EtcItemEditForm makeEditForm={makeEditForm} items={etcItem} deleteItem={deleteItem}/>
                </div>
            </div>
            <div className={styles.addForm}>
                <h2>addForm</h2>
            </div>
        </div>
    )
}


export default Maker;