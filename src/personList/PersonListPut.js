import React from 'react';
import PersonList from "./PersonListGet";

import API from './api';

export default class CreateEmployee extends React.Component {
    state = {
        name: "",
        id: 1
    }

    handleChange = event => {
        this.setState({id: event.target.value});
    }

    handleUpdate = () => {
        const {id} = this.state.id;

        API.put(`users/${id}`)
            .then(res => {
                PersonList.name.replace(PersonList.persons.user.name, res.data.name);
            })
    }

    render() {
        return (
            <>
                <h4>Axios PUT Request Example in React</h4>

                <input type="number" name="id" onChange={this.handleChange}/>

                <input type="text" name="name"/>

                <input type="button" name="update" value="Update" onClick={this.handleUpdate}/>
            </>
        )
    }
}