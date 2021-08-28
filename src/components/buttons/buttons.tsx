import React from 'react';
import styles from './buttons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

interface ButtonsProps {
    selector: 'add' | 'delete';
}
interface ButtonEventProps {
    callback: () => any;
}

const Buttons = ({selector, callback}: ButtonsProps & ButtonEventProps) => {
    const selectorName = {selector}.selector;

    const onButtonClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(e.detail !== 0) {
            callback();
        }
    }
    
    function getSelector(selectorName: string) {
            switch(selectorName) {
                case 'add':
                    return styles.add;
                case 'delete':
                    return styles.delete;
                default:
                    throw new Error(`${selectorName} is not supported type`);
            }
        }

    return(
        <div className={styles.buttons}>
        <button onClick={onButtonClick} className={`${styles.button} ${getSelector(selectorName)}` }>
        {selectorName === 'add' && <FontAwesomeIcon className={styles.button_icon} icon={faPlus} />}
        {selectorName === 'delete' && <FontAwesomeIcon className={styles.button_icon} icon={faTrashAlt} />}
        </button>
        </div>
    )
};



export default Buttons;

