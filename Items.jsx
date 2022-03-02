import React from 'react'
import './index.css'

function Items(props){
    return(
       <div>
           <img className="my-image"alt={props.image}
           src={props.image}/>
           <h4>{props.name}</h4>
           <p>{props.price}</p>
           <p>{props.description}</p>
       </div>
    )
}
export default Items