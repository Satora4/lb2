import React from 'react';

import API from '../personList/api';

export default class PostTask extends React.Component {
    state = {
        description: ''
    }

    handleChange = event => {
        this.setState({description: event.target.value});
        console.log(this.state.description, "handleChange");
    }

    handleSubmit = event => {
        event.preventDefault();

        const task = {
            description: this.state.description
        };
        console.log(this.state, "handleSubmit");

        API.post(`tasks`, task)
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
                    <label>Description:</label>
                    <input type="text" autoComplete="off" name="description" onChange={this.handleChange}/>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}