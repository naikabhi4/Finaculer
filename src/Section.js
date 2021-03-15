import React from 'react'
import "./Section.css";


function Section({name}) {
    return (
        <div className="section">
            <p>{name}</p>
        </div>
    )
}

export default Section
