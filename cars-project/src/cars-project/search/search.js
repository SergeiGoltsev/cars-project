import {Component} from "react";
import './search.css'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        }
    }
    onSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearch(term);
    }
    render() {
        return (
            <div className='search'>
                <input className='search__input' placeholder='Поиск' type='text'
                       onChange={this.onSearch}
                       value={this.state.term}
                />
            </div>
        )
    }
}

export default Search;