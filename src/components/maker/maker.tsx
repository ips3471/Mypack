import {
    ClothesItemEditForm, 
    CookwareItemEditForm, 
    EquipmentItemEditForm, 
    EssentialItemEditForm, 
    EtcItemEditForm
} from '../item-edit-form/item-edit-form';
import { Item, ItemCategory, Items } from '../main/main';
import styles from './maker.module.css';

interface MakerProps {
    items: Items;
    makeEditForm?: (categoryName: ItemCategory) => void;
}


const Maker = ({items, makeEditForm}: MakerProps) => {
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
                        <EssentialItemEditForm makeEditForm={makeEditForm} items={essentialItem} />
                        <CookwareItemEditForm makeEditForm={makeEditForm} items={cookwareItem} />
                        <EquipmentItemEditForm makeEditForm={makeEditForm} items={equipmentItem}/>
                        <ClothesItemEditForm makeEditForm={makeEditForm} items={clothesItem}/>
                        <EtcItemEditForm makeEditForm={makeEditForm} items={etcItem}/>
                </div>
            </div>
            <div className={styles.addForm}>
                <h2>addForm</h2>
            </div>
        </div>
    )
}


export default Maker;