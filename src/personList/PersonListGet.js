import React from 'react';

import API from './api';

export default class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        API.get(`users`)
            .then(res => {
                const persons = res.data;
                this.setState({persons});
            })
    }

    render() {
        return (
            <ul>
                {this.state.persons.map(person => <li>{person.id}, {person.user.name}</li>)}
            </ul>
        )
    }
}