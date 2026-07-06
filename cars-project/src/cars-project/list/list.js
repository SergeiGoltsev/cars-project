import './list.css'
import ListItem from '../listItem/listItem'

const List = ({data, onDelete, onSwitch, onPrice}) => {
    const elements = data.map(({id, ...item}) => {
        return (
            <ListItem
                key={id}
                {...item}
                onDelete={() => onDelete(id)}
                onSwitch={(e) => onSwitch(id, e.target.getAttribute('data-switch'))}
                onPrice={(e) => onPrice(id, e.target.value.replace(/[^\d]/g, ''))}
            />
        )
    });
    return (
        <ul className='list'>
            {elements}
        </ul>
    )
}

export default List;