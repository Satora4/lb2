import React from 'react';

import API from '../personList/api';

export default class DeleteTask extends React.Component {
    state = {
        id: ''
    }

    handleChange = event => {
        this.setState({id: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        API.delete(`tasks/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <label>Task ID:</label>
                    <input type="text" autoComplete="off" name="id" onChange={this.handleChange}/>
                    <button type="submit">Delete</button>
                </form>
            </div>
        )
    }
}