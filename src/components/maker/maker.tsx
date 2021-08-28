import ItemEditForm from '../item-edit-form/item-edit-form';
import { DeleteItem, Items, UpdateItem } from '../main/main';
import styles from './maker.module.css';

interface MakerProps {
    items: Items;
    deleteItem: DeleteItem;
    updateChanges: UpdateItem;
}

const Maker = ({items, deleteItem, updateChanges}: MakerProps) => {

    return (
        <div className={styles.maker}>
            <h1 className={styles.title}>나만의 장비를 관리해보세요</h1>
            <div className={styles.editor}>
                <div className={styles.editor_ctrg}>
                    <ItemEditForm items={items} deleteItem={deleteItem} updateChanges={updateChanges}    />
                </div>
            </div>
        </div>
    )
}


export default Maker;