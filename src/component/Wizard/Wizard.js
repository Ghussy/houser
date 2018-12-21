import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Wizard.css';

export default class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
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
        this.setState({ zipcode: val.target.value })
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
            </>
        )
    }
}