import React from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { titleize } from '../../utils/text';
import { dateYMDFormated } from '../../utils/date';
import { addDir } from '../../utils/url';
import "./ArticleList.css";


function VignetteHeader({article, comments}) {
  return (
    <Accordion.Header>
      <div className="ArticleItemList">
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
            Category : {article.category ? article.category : "-"}
          </div>
        </div>
      </div>
    </Accordion.Header>
  );
}

function VignetteComments({comments}) {
  return (<div>
    <hr />
    <h5>Comments</h5>
    {comments.map(comment => 
      <div className='ArticleItemList-comments' key={comment.id}>
        <div className="ArticleItemList-comments-authorDate">
          <span className="ArticleItemList-comments-author">{comment.author}</span>
          <span className="ArticleItemList-comments-date">{comment.date}</span>
        </div>
        <div>
          {comment.text}
        </div>
      </div>
    )}
  </div>);
}

function VignetteBody({article, comments}) {
  return (
    <Accordion.Body>
      {article.text}
      {comments && <VignetteComments comments={comments} />}
    </Accordion.Body>
  );
}

function Vignette({article, comments}) {
  return (<>
    <VignetteHeader article={article} comments={comments} />
    <VignetteBody article={article} comments={comments}/>
  </>);
}

function ArticleList({articles}) {
  return (
    <Accordion className='ArticleList'>
      {articles.map(article => {
        const article_path = addDir("articles", article.id);
        let cardBorder = (article.reviewed !== true && article.completed !== true)
          ? "danger"
          : (article.reviewed === true && article.completed !== true)
            ? "warning"
            : "secondary";
        const comments = [
          {id: 1, text: "Blabla", author: 2, date: "2022-12-23"},
          {id: 2, text: "Blabla222", author: 2, date: "2022-12-23"},
        ];
        return (
          <Accordion.Item eventKey={article.id} key={article.id}  className='ArticleList-card'>
            <Vignette article={article} comments={comments} />
          </Accordion.Item>
        )})
      }
    </Accordion>
  )
}

export default ArticleList;