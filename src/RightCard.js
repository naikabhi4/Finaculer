import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "./RightCard.css"
function RightCard() {
    return (
        <div className="RightCard">
            <Button>Actions</Button>
            <div className="BootCard">
            <Card className='bootstrap' style={{ width: '8rem'
             }}>
  <Card.Img variant="top" src="https://icons-for-free.com/download-icon-lady+user+woman+icon-1320166693239578038_512.png" />
  <Card.Body>
    <Card.Text className="text">Understand the power of compounding</Card.Text>
   
    <Button variant="primary">Learn Now</Button>
  </Card.Body>
  
</Card>
            </div>
            <div className="BootCard">
            <Card className='bootstrap' style={{ width: '8rem' }}>
  <Card.Img variant="top" src="https://thumbs.dreamstime.com/z/vector-illustration-cartoon-woman-character-working-computer-office-manager-icon-86189847.jpg" />
  <Card.Body>
    <Card.Text className="text">Track all your expenses on daily basis</Card.Text>
   
    <Button variant="primary">Learn Now</Button>
  </Card.Body>
  
</Card>
            </div>
        
        </div>
    )
}

export default RightCard
