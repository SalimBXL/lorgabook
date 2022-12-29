import React from 'react';
import Card from 'react-bootstrap/Card';
import { titleize } from '../../utils/text';

function Article({article}) {
  let cardBorder = "secondary";
  if (!article.completed && !article.reviewed) cardBorder = "danger";
  if (!article.completed && article.reviewed) cardBorder = "warning";

  console.log("ARTICLE : ", article);

  return (
    <Card border={cardBorder} style={{ width: '18rem' }}>
      <Card.Header as="h5">{titleize(article.title)}</Card.Header>
      <Card.Body>
        {(article.reviewed !== true && article.completed !== true) &&
          <Card.Title>
            {article.reviewed !== true && "Must be reviewed"}
            {(article.reviewed === true && article.completed !== true) && "Must be completed"}
          </Card.Title>
        }
        <Card.Subtitle className="mb-2 text-muted">
          {article.author}
          {(article.completed === true && article.author) && <span>&nbsp;<em>(reviewed by {article.reviewer})</em></span>}
        </Card.Subtitle>
        <Card.Text>
          {article.text}
        </Card.Text>
        <Card.Link href="#">{article.category}</Card.Link>
        <Card.Link href="#">{article.classe}</Card.Link>
        <Card.Link href="#">{article.groupe}</Card.Link>
      </Card.Body>
      <Card.Footer className="text-secondary">
        <h5>Comments</h5>

      </Card.Footer>
    </Card>
  )
}

export default Article;