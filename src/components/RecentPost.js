import React from 'react'
import { Container, Card, Figure} from 'react-bootstrap'
 

function RecentPost({ post }) {
    return (
        <div>
            

            <div class="container">
                <div class="row adding_space">
                    <div class="col-md-3">
                        <img src={post.image} alt="" />
                    </div>

                    <div class="col-md-4 ms-auto">
                        
                        <Card>
                            <Card.Body>
                                <Card.Text className="small-text"> <span className="bolded-text"> {post.category} </span> &#8729; {post.date}
                                </Card.Text>
                                <Card.Title class="cover-title">
                                    {post.title}
                                </Card.Title>
                                <Card.Text>
                                    {post.description}
                                </Card.Text>
                                
                                

                            </Card.Body>
                            
                            <div class="row">
                                <div class="col-md-3">
                                    <img className="rounded-circle author_img" src={post.author_image} alt="" />
                                </div>
                                <div class="col-md-6 ">
                                    <Card.Text className="spacing">
                                        {post.Author}
                                    </Card.Text>
                                    
                                    <Card.Text>
                                        {post.Company}
                                    </Card.Text>

                                </div>
                            </div>


                            

                        </Card>
                    </div>
                </div>
            </div>
            
            

        </div>
    );
}

export default RecentPost
