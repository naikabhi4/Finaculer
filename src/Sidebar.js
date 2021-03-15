import React from 'react'
import "./Sidebar.css"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Section from './Section';
import { StayPrimaryLandscapeOutlined } from '@material-ui/icons';
import Profile from './Profile';

function Sidebar() {
    return (
        <div className="sideBar border-right">
            <div className="sideBarTop ">
            <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQGVA7w9vXDHZg/company-logo_100_100/0/1608447646462?e=1623888000&v=beta&t=3heeXSBZjv6kpW7QKmVH1HxZOgxS6odw-bxvnZe23ps" alt=""></img>
            <ArrowBackIosIcon className="arrow"/>
           
            </div>
            <div className="section">
                <Section Icon={StayPrimaryLandscapeOutlined}  name="Dashboard"/>
                <Section name="Assets"/>
                <Section  name="Tracker"/>
                <Section name="Planning & Advisory"/>
                <Profile/>
            </div>
            
        </div>
    )
}

export default Sidebar
