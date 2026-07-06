import "./addForm.css"
import {Component} from "react";

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: '',
            price: '',
        }
    }

    inputValue = (e) => {
        this.setState({
                [e.target.name]: e.target.value
            }
        )
    }

    onAdd = (e) => {
        e.preventDefault();
        if (this.state.brand.length < 3 || !this.state.price) return;
        this.props.onAdd(this.state.brand, this.state.price);
        this.setState({
            brand: '',
            price: '',
        })
    }

    render() {
        return (
            <form className='add-form' onSubmit={this.onAdd}>
                <input className='add-form__input' placeholder='Brand' type='text'
                       name='brand' onChange={this.inputValue} value={this.state.brand}
                />
                <input className='add-form__input' placeholder='Price' type='number'
                       name='price' onChange={this.inputValue} value={this.state.price}
                />
                <button className='add-form__button'>
                    Add
                </button>
            </form>
        )
    }
}

export default AddForm;