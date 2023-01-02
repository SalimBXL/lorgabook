import React from 'react';
import { Link } from 'react-router-dom';
import Vignette from "./Vignette";
import Accordion from 'react-bootstrap/Accordion';
import { addDir } from '../../utils/url';
import "./ArticleList.css";

function ArticleList({articles, authors, classes, categories}) {
  return (
  <div className="ArticleList">
    <Accordion className='ArticleList-accordion'>
      {articles.map(articleItems => {
        const {article, comments} = articleItems;
        const {id, reviewed, completed, classe, category} = article;
        const article_path = addDir("articles", id);
        const reviewStatus = (reviewed !== true && completed !== true)
          ? 0
          : (reviewed === true && completed !== true)
            ? 1
            : 2;
        let cardBorder = (reviewed !== true && completed !== true)
          ? "danger"
          : (reviewed === true && completed !== true)
            ? "warning"
            : "secondary";
        return (
          <Accordion.Item eventKey={id} key={id}  className='ArticleList-card' >
            <Vignette 
              authors={authors}
              classe={classes[classe]}
              category={categories[category]}
              article={article}
              comments={comments} 
              reviewStatus={reviewStatus} 
              cardBorder={cardBorder}
            />
          </Accordion.Item>
        )})
      }
    </Accordion>
  </div>)
}

export default ArticleList;