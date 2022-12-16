import React, { useState, useEffect } from 'react'
import axios from "axios";
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { titleize } from '../../utils/text';
import { addDir } from '../../utils/url';
import "./ArticleList.css";

function ArticleList({articles_path}) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let loading = true;
    axios
      .get(articles_path)
      .then(response => response.data)
      .then(items => loading && setArticles(items));
    return () => (loading = false)
  }, [articles_path]);

  return (
    <>
      <h2>Articles</h2>

      <ListGroup defaultActiveKey="#link1" className='list-group'>
        {articles.map(article => {
          
          let cardBorder = (article.reviewed !== true && article.completed !== true) 
          ? "danger"
          : (article.reviewed === true && article.completed !== true)
            ? "warning"
            : "secondary";

          const article_path = addDir("articles", article.id);
          return <ListGroup.Item 
            action
            variant={cardBorder}
            href={article_path}
            key={article.id} 
            className="d-flex justify-content-between align-items-start list-group-item"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{titleize(article.title)}</div>
              <div>({article.author})</div>
               <div>{article.classe} {article.groupe}</div>
            </div>
            <div>{article.category}</div>
            <Badge bg="dark" pill>14</Badge>
          </ListGroup.Item>
        })}
      </ListGroup>
      
    </>
  )
}

export default ArticleList;