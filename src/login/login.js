/**

import React from "react";

import API from '../personList/api';

export default class PersonList extends React.Component {
    state = {
        persons: [],
        pw: "",
        id: 0
    }

    componentDidMount() {
        console.log("before API");
        API.get(`users`)
            .then(res => {
                const persons = res.data;
                this.setState({persons});
                console.log("after API", this.state.persons);
            })
    }

    render() {
        console.log("render()");
        if (this.state.persons !== undefined && this.state.persons.length >= 1) {
            const id = this.checkUser();
            return (
                <ul>
                    {this.state.persons?.map(person => person[id].user?.task.map(task => <li>{task}</li>))}
                </ul>
            )
        }
    }

    idNumber() {
        console.log("idNumber");
        return prompt("gib deine id an: ");
    }

    pw() {
        console.log("pw");
        return prompt("gib dein Passwort an: ");
    }

    checkUser() {
        let pw = undefined;
        let id = undefined;

        while (!(this.persons?.map(person => person.user.at(id).pw) === pw)) {
            id = this.idNumber();
            pw = this.pw();
            console.log(pw);
            console.log(this.persons?.map(person => person.user.at(id).pw));
        }
        return id;
    }
}
**/