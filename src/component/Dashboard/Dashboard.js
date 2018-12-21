import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import House from '../House/House'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houses: []
        }
    }

    

    render() {
        return (
            <>
                <Link to="/wizard">
                <button> Add New Property </button>
                </Link>
                <House>
                    {this.state.houses.map((val, i, arr) => {
                            return val;
                    })}
                </House>
            </>
        )
    }
}