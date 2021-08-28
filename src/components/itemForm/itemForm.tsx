import { useEffect, useRef } from 'react';
import Buttons from '../buttons/buttons';
import { DeleteItem, Item, UpdateItem } from '../main/main';
import styles from './itemForm.module.css';

interface ItemProps {
    item: Item;
    updateChanges: UpdateItem;
    deleteItem: DeleteItem;
}

const ItemForm = ({item, updateChanges, deleteItem}: ItemProps) => {
    let checkState = item.state;

    const stateRef = useRef<HTMLInputElement>(null);
    const { producer, name, weight, price, comment } = item;


    const onDeleteClick = () => {
        setTimeout(() => {
            deleteItem(item);
        }, 300);
    }

    useEffect(() => {
        checkState === true 
        ? stateRef.current?.setAttribute('checked', 'true')
        : stateRef.current?.removeAttribute('checked');
    console.log(`useEffect checkState: ${checkState}`)
    }, [checkState])


    const handleState = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
        e.preventDefault();
        if (checkState === true) {
            checkState = false;
        } else {
            checkState = true;
        }
        updateChanges({
            ...item,
            'state': checkState,
        });
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (!e.target) {
            return;
        }
        let target = e.currentTarget.name; 
        let value = e.currentTarget.value;
        updateChanges({
            ...item,
            [target]: value,
        })

    }

    return (
        <li>
        <form className={styles.editor_form}>
            <div className={styles.checkbox__container}>
                <input ref={stateRef} type="checkbox" name="state" id='state'  />    
                <label onClick={(e) => handleState(e)} htmlFor='state'>Pick</label>
            </div>
            <input name="producer"  onChange={onChange} value={producer} className={styles.producer} type="text" placeholder="producer"/>
            <input name="name"  onChange={onChange} value={name} className={styles.name} type="text" placeholder="name"/>
            <input name="weight"  onChange={onChange} value={weight} className={styles.weight} type="number" placeholder="g"/>
            <input name="price"  onChange={onChange} value={price} className={styles.price} type="number" placeholder="₩"/>
            <input name="comment"  onChange={onChange} value={comment} className={styles.comment} type="text" placeholder="comment"/>
        <Buttons selector='delete' callback={onDeleteClick} />
        </form>
    </li> 
    )
};


export default ItemForm;