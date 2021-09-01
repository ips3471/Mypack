import { database } from './firebase';
import { Item } from '../components/main/main';

export type UserId = any;

export class ItemRepository {
    saveItems(userId: UserId, item: Item) {
        const ref = database.ref(`${userId}/items/${item.id}`);
        ref.set(item);
        console.log('save done');
    }

    updateItems(userId: UserId, updateCallback: any) {
        const ref = database.ref(`${userId}/items`);
        ref.on('value', (snapshot) => {
            const val = snapshot.val();
            val && updateCallback(val);
            val && console.log('update done');
        })
        return () => ref.off();
    }

    deleteItem(userId: UserId, item: Item) {
        database.ref(`${userId}/items/${item.id}`).remove();
        console.log('delete done');
    }
}

export default ItemRepository;









