import React from "react";
import './Card.css';


function Card (props) {
    return(<div className='movie-card'>
        <div className='card-top'>
            <img src={props.img} alt=""/>
        </div>
        <div className='card-bottom'>
            <h3>{props.name}</h3>
            <p>{props.year}</p>
        </div>
    </div>)
}
export default Card;