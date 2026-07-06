import './listItem.css'
import { useState } from "react";

const ListItem = ({brand, price, stock, discount, onDelete, onSwitch, onPrice}) => {
    const [isEditing, setIsEditing] = useState(false);

    let listItemClass = 'listItem'
    if (stock) {
        listItemClass += ' listItem--stock'
    }
    if (discount) {
        listItemClass += ' listItem--discount'
    }

    const formattedPrice = isEditing
        ? price
        : (new Intl.NumberFormat('ru-RU').format(price)) + ' $';

    return (

        <li className={listItemClass}>
            <p className='listItem__brand' data-switch='stock'
               onClick={onSwitch}
            >{brand}</p>
            <input className='listItem__price' type='text'
                  /* value={(new Intl.NumberFormat('ru-RU').format(price)) + ' $'}*/
                  /* value={price + ' $'}*/
                   onChange={onPrice}
                   value={formattedPrice}
                   onFocus={() => setIsEditing(true)}
                   onBlur={() => setIsEditing(false)}
            />
            <button className='listItem__button listItem__discount' data-switch='discount'
                    onClick={onSwitch}
            >
                Discount
            </button>
            <button className='listItem__button listItem__del'
                    onClick={onDelete}
            >
                Delete
            </button>
        </li>
    )
}

export default ListItem;