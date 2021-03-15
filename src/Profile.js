import React from 'react'
import "./Profile.css"
import { Avatar, IconButton } from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';

function profile() {
    return (
        <div className="profile">
           <IconButton>
           <Avatar className="avatar " src="https://assets.telegraphindia.com/telegraph/1c43a64c-d7cd-4090-9710-7a6975900877.jpg"/>
           </IconButton> 
           
           <p>Sachin Tendulkar</p>
           <ArrowDropDown className="arrowDrop"/>
        </div>
    )
}

export default profile
