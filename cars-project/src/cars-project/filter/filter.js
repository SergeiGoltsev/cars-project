import {Component} from "react";
import "./filter.css"

class Filter extends Component  {
    constructor(props) {
        super(props);
    }
    render() {
        const buttonsArr = [
            {filter: "all", text: 'Все авто'},
            {filter: "stock", text: 'В наличие'},
            {filter: "discount", text: 'Со скидкой'},
        ]
        const buttons = buttonsArr.map(({filter, text}) => {
            const active = filter === this.props.filter
            return <button className={active ? 'filter-button filter-button--active' : 'filter-button'}
                           data-filter={filter}
                           onClick={() => this.props.onFilterButtons(filter)}
            >
                {text}
            </button>
        })
        return (
            <div className='filter-buttons'>
                {buttons}
            </div>
        )
    }
}

export default Filter;