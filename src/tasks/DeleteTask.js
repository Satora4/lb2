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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    <h4>Task ID:</h4>
                        <input type="text" name="id" onChange={this.handleChange}/>
                    </label>
                    <button type="submit">Delete</button>
                </form>
            </div>
        )
    }
}