import React from "react";

import API from '../personList/api';

export default class PersonList extends React.Component {
    state = {
        pw: "",
        id: undefined
    }

    handleId = event => {
        this.setState({id: event.target.value})
        console.log(this.state, "handleId")
    }

    handlePw = event => {
        this.setState({pw: event.target.value})
        console.log(this.state, "handlePw")
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log("before API");
        const {id, pw} = this.state;
        API.get(`users/${id}`)
            .then(res => {
                if (id === undefined || null || pw === undefined || null){
                    alert("Not everything filled out");
                } else {
                    const person = res.data;
                    console.log(person.pw, pw);
                    if (person.pw.toString() === pw.toString()) {
                        console.log("Loged in");
                        window.location.href = "http://localhost:3001/task";
                    } else {
                        alert("Wrong password oder userId");
                    }
                }

            })
    }

    render() {
        console.log("render()");
        return (
            <dif className="form">
                <form onSubmit={this.handleSubmit}>
                    <label>Enter your Id: </label><br/>
                    <input type="number" autoComplete="off" name="userId" onChange={this.handleId}/><br/>
                    <label>Enter your Password: </label><br/>
                    <input type="text" autoComplete="off" name="pw" onChange={this.handlePw}/><br/>

                    <button type="submit">Login</button>
                </form>
            </dif>
        )

    }
}
