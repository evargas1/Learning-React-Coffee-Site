import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Tab({ props }) {
    return (
    
            <Card style={{ width: '16rem', margin: '3px' }} >
                <Link to={`/tab/${props._id}`}>
                    <Card.Img variant="top"  src={props.Image} />
                </Link>
                <Card.Body className="center">
                    <Card.Title>{props.Title}</Card.Title>
                
                <Link to={`/tab/${props._id}`}>
                    <button className="add-to-cart" >
                        Add to Cart 
                    </button>
                </Link>
                </Card.Body>
            </Card>
        
    )
}

export default Tab
