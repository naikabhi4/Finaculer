import { MoreHoriz } from '@material-ui/icons'
import React from 'react'
import "./Card.css"

function Card({head,placeholder,value}) {
    return (
    <div className="Cards">
         <div className="Card border">
            <p>{head}</p>
            <MoreHoriz/>
            <input placeholder={placeholder} size="20" className="input" type="number"/>
            <p1 className="msg">Last Updated : {value}</p1>
        </div>
       
    </div>
       
    )
}

export default Card
