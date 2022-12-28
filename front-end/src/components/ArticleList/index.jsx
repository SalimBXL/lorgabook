import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { titleize } from '../../utils/text';
import { dateYMDFormated } from '../../utils/date';
import { addDir } from '../../utils/url';
import axios from "axios";
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
    <div>
      <h2>Articles</h2>
      <ListGroup defaultActiveKey="#link1" className='list-group'>
        {articles.map(article => {
          
          const article_path = addDir("articles", article.id);
          
          let cardBorder = (article.reviewed !== true && article.completed !== true)
            ? "danger"
            : (article.reviewed === true && article.completed !== true)
              ? "warning"
              : "secondary";
          
          const comments = [
            {text: "Blabla", author: 2, date: "2022-12-23"},
            {text: "Blabla222", author: 2, date: "2022-12-23"},
          ];

          return <ListGroup.Item 
            action
            variant={cardBorder}
            href={article_path}
            key={article.id} 
            className="list-group-item ArticleItemList"
          >
            <div className="ArticleItemList-title">
              [title]{titleize(article.title)}
              {(comments.length > 0) && <Badge bg="dark" pill>{comments.length}</Badge>}
            </div>

            <div className='ArticleItemList-subtitle'>          
              ({dateYMDFormated(article.created_at)} by [author]{article.author})
            </div>

            <div className='ArticleItemList-footer'>
              <div>
                Classe: {article.classe ? article.classe : "-"} &nbsp; 
                Groupe: {article.groupe ? article.groupe : "-"} &nbsp;
              </div>
              <div>
                Category : {article.category ? article.category : "-"}
              </div>
            </div>
          </ListGroup.Item>
        })}
      </ListGroup>
    </div>
  )
}

export default ArticleList;