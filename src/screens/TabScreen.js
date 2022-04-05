import React from 'react'
import { useParams} from 'react-router'
import tabs from '../tabs'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Image, Container, Button } from 'react-bootstrap'


function TabScreen({ match }) {
    const { id } = useParams();
    const tab = tabs.find((t) => t._id === Number(id))

    return (
        <div>
           

            <Container>

                {/* Infomation of item */}
                <Row>
                    <Col md={4} >
                    <h2 className="cover-title">{tab.Title}</h2>
                    <h6 className="bolded-text">{tab.Category}</h6>


                    
                    <Image src={tab.image} alt={tab.Title} fluid />
                    <button className="add-to-cart" >
                        Add to Cart 
                    </button>
                    </Col>




              {/* options to add milk and sweetners or whip cream */}
                    
                    <Col md={8}>
                    <Container>
                        <Row className="adding_space">
                        <Col className="add-on-butt" xs={6}>
                            Whole Milk
                        </Col>
                        </Row>

                        <Row className="adding_space">
                        <Col className="add-on-butt" xs={6}>
                            Soy Milk
                        </Col>
                        </Row>

                        <Row className="adding_space">
                        <Col className="add-on-butt" xs={6}>
                            Oat Milk
                        </Col>
                        </Row>

                        <Row className="adding_space"> 
                        <Col className="add-on-butt" xs={6}>
                            Coconut Milk
                        </Col>
                        </Row>

                        <Row className="adding_space">
                        <Col className="add-on-butt" xs={6}>
                            Vanilla
                        </Col>
                        </Row>

                        <Row className="adding_space">
                        <Col className="add-on-butt" xs={6}>
                            French vanilla
                        </Col>
                        </Row>

                        <Row className="adding_space">
                        <Col className="add-on-butt" xs={6}>
                            Caramel
                        </Col>
                        </Row>

                        <Row className="adding_space">
                        <Col className="add-on-butt" xs={6}>
                            <button><span className="size-of-add">&#43;</span>
                            Esspresso</button>
                            
                        </Col>
                        </Row>

                        <Row className="adding_space">
                        <Col className="add-on-butt" xs={6}>
                            Whip cream
                        </Col>
                        </Row>
                    </Container>
                    </Col>



                    {/* total calories button */}
                    
                </Row>
            </Container>
                        

            
        </div>
    )
}

export default TabScreen
