import Header from '../header/header';
import Maker from '../maker/maker';
import Overview from '../overview/overview';
import styles from './main.module.css';
import { useState, useEffect } from 'react';
import ItemRepository, { UserId }  from '../../service/item-repository';

export type ItemCategory = 'essential' | 'cookware' | 'equipment' | 'clothes' | 'etc' ;
export type Item = {
    id: any,
    category: ItemCategory,
    state: boolean,
    producer: string,
    name: string,
    weight: string,
    price: string,
    comment: string,
}
export type Items = {
    [key: string]: Item;
}
export type DeleteItem = (item: Item) => void;
export type UpdateItem = (item: Item) => void;
interface MainProps {
    itemRepository: ItemRepository;
    user: UserId;
    setUserId: any;
}
const Main = ({setUserId, itemRepository, user}: MainProps) => {
    const [items, setItems] = useState<Items>({});
    // console.log(user);

    useEffect(() => {
        function updateCallback(val: Items, userId: UserId) {
            setItems(val);
            setUserId(userId);
            console.log(`sync done! items & userId${userId}`);
        }
        const sync = itemRepository.updateItems(user, updateCallback);
        return () => { sync() };
    }, [user, itemRepository, setUserId])

    const deleteItem: DeleteItem = item => {
        setItems(items => {
        const updated = {...items};
        delete updated[item.id];
        return updated;
        })
        // remove item from firebase repository
        itemRepository.deleteItem(user, item);
    }

    const updateChanges: UpdateItem = item => {
        setItems(items => {
            const updated = {...items};
            updated[item.id] = item;
            return updated;
        })
        // save item in firebase repository
        itemRepository.saveItems(user, item);
    }

    return(
        <div className={styles.main}>
        <Header user={user} setUserId={setUserId} />
        <Maker deleteItem={deleteItem} updateChanges={updateChanges} items={items} />
        <Overview items={items} />
        </div>
    )
};

export default Main;