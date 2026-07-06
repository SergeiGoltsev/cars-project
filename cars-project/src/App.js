import React from "react";
import {Component} from "react";
import {StrictMode} from "react";
import './App.css';

const Header = () => {
    return <h2>Hello world</h2>
}

/*const Field = () => {
    const holder = 'Enter here';
    const styledField = {
        width: '300px',
    };
    return <input
        placeholder={holder}
        type="text"
        style={styledField} />
}*/

/*class Field extends React.Component {

}*/

class Field extends Component {
    render() {
        const holder = 'Enter here';
        const styledField = {
            width: '200px',
        };
        return <input
            placeholder={holder}
            type="text"
            style={styledField}/>
    }
}

function Btn() {
    /* const text = 'Log in';
       return <button>{text}</button> */
    /* const res = () => {
        return "Log in"
    }
    return <button>{res()}</button> */
    /* const span = <span>Log in</span>
     return <button>{span}</button>*/

    const text = 'Log in'
    const logged = false;
    return <button>{logged ? 'Enter' : text}</button>
    /*    let text;
        const logged = true;
        if (logged) {
            text = 'Enter'
        } else {
            text = 'Log in'
        }
        return <button>{text}</button>*/
}

function App() {
    return (
        <div className="App">
            <StrictMode>
                <Header/>
            </StrictMode>
            <Field/>
            <Btn/>
        </div>
    );
}

export {Header};
export default App;

