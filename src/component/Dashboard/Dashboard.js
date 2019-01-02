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
        this.delete=this.delete.bind(this)
        //use this to bind or use an arrow function
    }

    componentDidMount() {
        axios.get("/api/houses").then(res => {
          this.setState({ houses: res.data });
       
        });
      }

      delete(id) {
        
      axios.delete(`/api/delete/${id}`).then(res =>{
          this.setState({ houses: res.data });
        console.log(res.data)
      })
  }

    // showHouses(){
    //   let displayHouses = this.state.houses.map((val, i, arr) => {
    //     return (val)
    //     })
    // }

    render() {
       
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
          delete = {this.delete}
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