import React, { Component } from 'react'
import Header  from './components/Header/Header'
import AddForm from './components/BookList/AddForm'
import "./App.css"

export default class App extends Component {

    render() {
        return (
            <div className='salam'>
                <Header></Header>
                <AddForm></AddForm>
            </div>
        )
    }
}
