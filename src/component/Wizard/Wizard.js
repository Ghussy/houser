import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Wizard.css';
import axios from 'axios';

export default class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
    }

    //-------------Axios Request-----------//


    addHouse() {
        const {name, address, city, state, zip}= this.state
        axios.post('/api/addhouse', {name, address, city, state, zip}) .then(res => {
            console.log(res.data)
          this.setState({ 
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
           });
          console.log('res received');
          console.log(res.data)
        });
      }

    handleNameChange(val) {
        console.log(val.charCode)
        this.setState({ name: val.target.value })
      }

    handleAddressChange(val) {
        console.log(val.charCode)
        this.setState({ address: val.target.value })
      }

      handleCityChange(val) {
        console.log(val.charCode)
        this.setState({ city: val.target.value })
      }

      handleStateChange(val) {
        console.log(val.charCode)
        this.setState({ state: val.target.value })
      }

      handleZipChange(val) {
        console.log(val.charCode)
        this.setState({ zip: val.target.value })
      }




    render() {
        return (
            <>
                <Link to="/">
                <button> Cancel </button>
                </Link>
                <div className='input-container'>
                    <div className='line1'>
                        <p>Property Name</p>
                        <input onChange={e => this.handleNameChange(e)} />
                    </div>
                    <div className='line2'>
                        <p>Address</p>
                        <input onChange={e => this.handleAddressChange(e)} />
                    </div>
                    <div className='line3'>
                        <div>
                            <p>City</p>
                            <input onChange={e => this.handleCityChange(e)} />
                        </div>
                        <div>
                            <p>State</p>
                            <input onChange={e => this.handleStateChange(e)} />
                        </div>
                        <div>
                            <p>Zip</p>
                            <input onChange={e => this.handleZipChange(e)} />
                        </div>
                    </div>
                </div>
                <Link to="/">
                < button onClick={e => this.addHouse(e)}> Complete </button>
                </Link>
            </>
        )
    }
}