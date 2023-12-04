import React from 'react'

function Card(props) {
    return (
        <ul>
            <li>{props.name}</li>
            <li>{props.age}</li>
        </ul>
    )
}


export default Card
