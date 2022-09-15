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
            <>
                <h4>Axios PUT Request Example in React</h4>

                <input type="number" name="id" onChange={this.idChange}/>

                <input type="text" name="description" onChange={this.desChange}/>

                <input type="button" name="update" value="Update" onClick={this.handleUpdate}/>
            </>
        )
    }
}