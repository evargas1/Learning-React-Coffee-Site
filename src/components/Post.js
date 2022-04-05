import React from 'react'
import { Container, Card} from 'react-bootstrap'

function Post({ post }) {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={post.image} />
                <Card.Body >
                    <Card.Text className="small-text"> <span className="bolded-text"> {post.category} </span> &#8729; {post.date}
                    </Card.Text>
                    
                    <Card.Title>
                        {post.title}
                    </Card.Title>

                    <Card.Text>
                        {post.description}
                    </Card.Text>


                </Card.Body>
            
            </Card>
        </div>
    );
}

export default Post