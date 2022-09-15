import React from 'react';

import API from '../personList/api';

export default class PutTask extends React.Component {
    state = {
        task: {
            description: ""
        },
        id: undefined
    }

    idChange = event => {
        this.setState({id: event.target.value});
        console.log(this.state.id, "idChange");
    }

    desChange = event => {
        this.setState({description: event.target.value})
        console.log(this.state.task.description, "desChange");
    }

    handleUpdate = () => {
        const {id, description} = this.state;
        console.log(this.state, "handleSubmit");

        API.put(`tasks/${id}`, {description})
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div class="form">
                <form onClick={this.handleUpdate}>
                    <h4>Axios PUT Request Example in React</h4>
                    <label>Task Id:</label>
                    <input type="number" autoComplete="off" name="id" onChange={this.idChange}/><br/>
                    <label>New Task description:</label>
                    <input type="text" autoComplete="off" name="description" onChange={this.desChange}/><br/>

                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}