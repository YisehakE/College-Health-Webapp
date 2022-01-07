
import React, { Component } from "react";



class Homepage extends Component {

    constructor() {

        super();

        this.state = {
            field1 = "",
            field2 = ""
        }


    } 

    componentDidMount() {

        fetch("API ENDPOINT")
            .then()
            .then()
            .catch(err => console.log(err))

    }


    method1 = () => {}

    method2 = () => {}



}






module.exports = Homepage;