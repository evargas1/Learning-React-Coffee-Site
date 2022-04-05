import React from 'react'
import posts from '../posts'
import Post from '../components/Post'
import RecentPost from '../components/RecentPost'
import { Row, Col, Container } from 'react-bootstrap'
import Tab from '../components/Tab'
import { useState } from 'react'

import Tabs from '../components/Tabs'

function HomeScreen() {
    const first_ele = posts[2]

    return (
    <div>
        <Row>
            <Tabs />
        </Row>
         

        <Row>
                
            <Col key={first_ele._id} sm={12} md={12}>
                    
                    
            <RecentPost post={first_ele} />

            </Col>
                
        </Row>
            
            <Row>
                {posts.map(post => (
                    <Col key={post._id} sm={9} md={6}>
                    
                    <Post post={post} />
                    

                    </Col>
                ))}
            </Row>
            
        </div>
    );
}

export default HomeScreen
