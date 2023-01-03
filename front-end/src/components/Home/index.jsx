import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ReviewsResume from "../ReviewsResume";
import "./Home.css";

function Home({articlesNotReviewed, articlesNotCompleted, totalArticles, fullyReviewed, lastArticles}) {
  return (<div className='Home'>

    <Container>
      <Row>
        {lastArticles && lastArticles.map(article => <Col key={article.id}>
          <Card className='Home-Card'>
            <Card.Body className='Home-Card-Body'>
              <span className="material-symbols-outlined">article</span>
              <p style={{
                  padding: "0px 16px"
                }}>
                {article.title}
              </p>
            </Card.Body>
          </Card>
        </Col>)}

        <Col><Card className='Home-Card'>
          <Card.Body className='Home-Card-Body'>
            <span className="material-symbols-outlined">reviews</span>
            <div style={{
              padding: "0px 16px"
            }}>
            <h3>Reviews</h3>
            <ReviewsResume 
              notReviewed={articlesNotReviewed} 
              notCompleted={articlesNotCompleted} 
              totalArticles={totalArticles} 
              fullyReviewed={fullyReviewed} 
              verbose={true}
            />
            </div>
          </Card.Body>
        </Card></Col>
      </Row>
    </Container>
  
  
  </div>)
}

export default Home;