import React, { useState } from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import Tab from './Tab'
import coffee from '../coffee'
import food from '../food'
import teas from '../teas'


function Tabs() {
    const [count, setCount] = useState(0);
    const [active, setActive] = useState('Coffee Options');
// looping through this russian doll. 

   
let display = 
    <div>
        <Row>
            {coffee.map(coff => (

            <Col key={coff._id} sm={6} md={5} lg={3}>
                                        
                <Tab props={coff}/>
                
            </Col>
            ))}   
            
            

            </Row>
    </div>

    if (active === 'Coffee Options') {
        display = 
        <div>
            <Row>
                {coffee.map(coff => (

                <Col key={coff._id} sm={6} md={5} lg={3}>
                                        
                    <Tab props={coff}/>
                
                </Col>
                ))}   
            
            

            </Row>
        </div>

    } else if (active === 'Food Options'){
        display = 
        <div>
            <Row>
                {food.map(foo => (

                <Col key={foo._id} sm={6} md={5} lg={3}>
                                        
                    <Tab props={foo}/>
                
                </Col>
                ))}   
            
            

            </Row>
        </div>
    } else if (active === 'Tea Options'){
        display = 
        <div>
            <Row>
                {teas.map(tea => (

                <Col key={tea._id} sm={6} md={5} lg={3}>
                                        
                    <Tab props={tea}/>
                
                </Col>
                ))}   
            
            

            </Row>
        </div>
        
    }

    return (
        
        
        
        <div>
       

            <div className="tab">
                <button className="menu-butt" onClick={() => setActive('Coffee Options')}>
                    Coffee
                </button>
                <button className="menu-butt" onClick={() => setActive('Food Options')}>
                    Food
                </button>
                <button className="menu-butt" onClick={() => setActive('Tea Options')}>
                    Tea
                </button>
            </div>
           
            
         

            
            <h3>{display}</h3>

         


        </div>
    );
}

export default Tabs


// I am thinking about making this like a toggle 

