import { NotificationImportant, Settings } from '@material-ui/icons'
import React from 'react'
import "./Barchart.css"
import {Bar} from 'react-chartjs-2';
import Card from './Card';
function Barchart() {
    return (
        <div className="Barchart">
        <div className="Topbar border">
        <Settings className=" icon border"/>
           <NotificationImportant className=" icon border"/> 
        </div>
        <div className="Bardata border">
        <Bar className="bar"
                data={{
                    labels:["1","2","3","4","5",
                    "6","7","8","9","10"],
                    datasets:[{
                        label:"Annual Projection",
                        data:[0,200,400,600,800,1000,1200,1400,1600,1800,2000],
                        backgroundColor:"blue"
                    }, ],
                    options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}
                }}
               

                height={400}
                width={600}

            />
        </div>
        <div className="bottomView">
        <Card  head="Asset Balance" placeholder="Enter Amount" value="3 Dec"/>
           <Card head="Growth Rate" placeholder="Enter Growth Rate" value="Inflation" />
           <Card  head="Average Expance" placeholder="Amount" value="3 Month Average"/>
           <Card  head="Financial Independence" placeholder="Age" value="Optimized"/>
           
        </div>
           
          </div>
    )
}

export default Barchart
