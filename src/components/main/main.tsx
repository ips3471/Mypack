import Header from '../header/header';
import Maker from '../maker/maker';
import Overview from '../overview/overview';
import styles from './main.module.css';
import { useState } from 'react';


export type ItemCategory = 'essential' | 'cookware' | 'equipment' | 'clothes' | 'etc' | null;
export type Item = {
    id: any,
    category: ItemCategory,
    state: boolean,
    producer?: string,
    name: string,
    weight?: number | string,
    price?: number | string,
    comment?: string,
}
export type Items = Item[];
export type MakeItem =  (categoryName: ItemCategory) => void;
export type DeleteItem = (id: any) => void;

const Main = () => {
    const [items, setItems] = useState<Items>([
        {
            id: '1',
            category: 'essential',
            state: true,
            producer: 'producer',
            name: 'productName',
            weight: 1000,
            price: 420000,
            comment: 'comment',
        },
        {
            id: '2',
            category: 'cookware',
            state: true,
            producer: '',
            name: '',
            weight: '',
            price: '',
            comment: '',
        },
        {
            id: '3',
            category: 'etc',
            state: true,
            producer: 'unknown',
            name: 'poewrbank 20000mAh',
            weight: '500',
            price: '70,000',
            comment: '2days long',
        },
        {
            id: '4',
            category: 'essential',
            state: true,
            producer: 'cumulus',
            name: 'quilt 350',
            weight: '600',
            price: '240,000',
            comment: '-2c ~ 18c',
        },
        {
            id: '5',
            category: 'equipment',
            state: true,
            producer: '',
            name: '',
            weight: '',
            price: '',
            comment: '',
        }
    ]);


    const makeEditForm: MakeItem = (categoryName: ItemCategory) => {
        const itemForm: Item = {
            id: Date.now(),
            category: categoryName,
            state: false,
            producer: '',
            name: '',
            weight: '',
            price: '',
            comment: '',
        }
        setItems(items => {
            const updated = [...items, itemForm]
            return(updated);
        })
    }
    
    const deleteItem: DeleteItem = (id: any) => {
        setItems(items => {
            const updated = [...items].filter(item =>
                item.id !== id
            )
            return(updated);
        })
    }

    return(
        <div className={styles.main}>
        <Header />
        <Maker deleteItem={deleteItem} makeEditForm={makeEditForm} items={items} />
        <Overview items={items} />
        </div>
    )
};

export default Main;