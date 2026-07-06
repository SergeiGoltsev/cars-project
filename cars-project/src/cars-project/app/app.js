import {Component} from "react";
import './app.css'
import List from '../list/list'
import AddForm from '../addForm/addForm'
import Search from '../search/search'
import Filter from '../filter/filter'
import Info from '../info/info'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {brand: 'GMC Yukon Denali', price: 93200, stock: true, discount: true, id: 1},
                {brand: 'RAM 2500 Laramie', price: 82300, stock: false, discount: true, id: 2},
                {brand: 'Ford Expedition', price: 88900, stock: true, discount: false, id: 3},
                {brand: 'Jeep Grand Cherokee', price: 42900, stock: true, discount: true, id: 4},
                {brand: 'BMW X5 M60i', price: 106362, stock: false, discount: false, id: 5},
                {brand: 'Chevrolet Tahoe', price: 76400, stock: false, discount: false, id: 6},
            ],
            term: '',
            filter: 'all',
        };
        this.minIndex = 7;
    }

    deleteItem = (id) => {
        this.setState(({data}) => ({
                data: data.filter(item => item.id !== id)
            })
        )
    }

    switchItem = (id, switchAttribute) => {
        this.setState(({data}) => ({
                data: data.map(item => {
                    if (item.id === id) {
                        return {...item, [switchAttribute]: !item[switchAttribute]}
                    }
                    return item
                })
            })
        )
    }

    addItem = (brand, price) => {
        const newItem = {
            brand,
            price,
            stock: false,
            discount: false,
            id: this.minIndex++
        };
        this.setState(({data}) => ({
                data: [...data, newItem]
            })
        )
    }

    searchItem = (term) => {
        this.setState({term});
    }

    searchFunction = (arr, search) => {
        if (search.length === 0) {
            return arr
        }
        return arr.filter(item => {
            return item.brand.indexOf(search) > -1;
        })
    }

    onFilterItems = (filter) => {
        this.setState({filter})
    }

    filterFunction = (arr, filter) => {
        switch (filter) {
            case "all":
                return arr;
            case "stock":
                return arr.filter(item => item.stock);
            case "discount":
                return arr.filter(item => item.discount);
            default:
                return arr;
        }
    }

    priceItem = (id, priceValue) => {
        this.setState(({data}) => ({
                data: data.map(item => {
                    if (item.id === id) {
                        return {...item, price: priceValue}
                    }
                    return item
                })
            })
        )
    }

    render() {
        let visibleData = this.filterFunction(this.searchFunction(this.state.data, this.state.term), this.state.filter);
        const carsTotal = this.state.data.length;
        const carsDiscounted = this.state.data.filter(item => item.discount).length;
        const carsStock = this.state.data.filter(item => item.stock).length;

        return (
            <div className='page-container'>
                <Info
                    carsTotal={carsTotal}
                    carsDiscounted={carsDiscounted}
                    carsStock={carsStock}
                />
                <div className='search-filter-block'>
                    <Search
                        onSearch={this.searchItem}
                    />
                    <Filter
                        filter={this.state.filter}
                        onFilterButtons={this.onFilterItems}
                    />
                </div>
                <AddForm
                    onAdd={this.addItem}
                />
                <List
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onSwitch={this.switchItem}
                    onPrice={this.priceItem}
                />
            </div>
        )
    }
}

export default App;