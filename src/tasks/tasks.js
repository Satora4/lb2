import React from 'react';

import API from '../personList/api';

export default class Tasks extends React.Component {
    state = {
        tasks: []
    }

    componentDidMount() {
        API.get(`tasks`)
            .then(res => {
                const tasks = res.data;
                this.setState({tasks});
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <ul class="grid">
                {this.state.tasks.map(task => <li><input type="checkbox"/>{task.id}, {task.description}</li>)}
            </ul>
        )
    }
}