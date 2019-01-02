import React from 'react';
// import axios from 'axios'


function house (props) {


    return(
      
 <div>
     <img src={props.img_url} />
    <p>{props.address}</p>
    <p>{props.city}</p>
    <p>{props.zip}</p>
    <p>{props.mortgage}</p>
    <p>{props.rent}</p>
    <p>{props.propterty}</p>
    <button onClick={e => props.delete(props.id) }>Delete</button>
    </div> )
;}

export default house;

    

