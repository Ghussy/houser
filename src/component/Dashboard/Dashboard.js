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

    componentDidMount() {
        axios.get("/api/houses").then(res => {
          this.setState({ houses: res.data });
          console.log('component mounted');
          console.log(res.data)
        });
      }

    // showHouses(){
    //   let displayHouses = this.state.houses.map((val, i, arr) => {
    //     return (val)
    //     })
    // }

    render() {
            console.log(this.state);
    let houseList = this.state.houses.map((house, i)=> {
        
      return (
        <House
          key={house.id}
          id={house.id}
          address={house.address}
          city={house.city}
          zip={house.zip}
          mortgage={house.mortgage}
          rent={house.rent}
          property={house.property}
          img_url={house.img_url}
        //   deleteItem={() => this.deleteItem(house.house_id)}
        />
      );
    });
    return(
            <>
                <Link to="/wizard">
                <button> Add New Property </button>
                </Link>
               {houseList}
            </>
        )
    }
}