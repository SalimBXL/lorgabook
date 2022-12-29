import React from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';
import { titleize, mergeNamesOfAuthor } from '../../utils/text';
import { dateYMDFormated } from '../../utils/date';
import { addDir } from '../../utils/url';
import "./ArticleList.css";


function VignetteHeader({article, comments, reviewStatus, cardBorder, author}) {
  return (
    <Accordion.Header>
      <div className="ArticleItemList">
        <div className="ArticleItemList-title">
          {titleize(article.title)}
          {(comments.length > 0) && <Badge bg="dark" pill>{comments.length}</Badge>}
        </div>
        <div className='ArticleItemList-subtitle'>          
          ({dateYMDFormated(article.created_at)} by {mergeNamesOfAuthor(author)})
        </div>
        <div className='ArticleItemList-footer'>
          <div>
            Classe: {article.classe ? article.classe : "-"} &nbsp; 
            Groupe: {article.groupe ? article.groupe : "-"} &nbsp;
            Category : {article.category ? article.category : "-"} &nbsp;
            {reviewStatus !== 2 && 
              <Badge bg={cardBorder}>
                {reviewStatus === 0 && `Not yet reviewed`}
                {reviewStatus === 1 && `Not yet completed`}
              </Badge>
            }
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

function Vignette({article, comments, reviewStatus, cardBorder, author}) {
  return (<>
    <VignetteHeader 
      article={article} 
      comments={comments} 
      reviewStatus={reviewStatus} 
      cardBorder={cardBorder}
      author={author}
    />
    <VignetteBody 
      article={article} 
      comments={comments}
    />
  </>);
}

function ArticleList({articles, authors}) {
  return (
    <Accordion className='ArticleList'>
      {articles.map(article => {
        const article_path = addDir("articles", article.id);
        const reviewStatus = (article.reviewed !== true && article.completed !== true)
          ? 0
          : (article.reviewed === true && article.completed !== true)
            ? 1
            : 2;
        let cardBorder = (article.reviewed !== true && article.completed !== true)
          ? "danger"
          : (article.reviewed === true && article.completed !== true)
            ? "warning"
            : "secondary";
        const comments = [
          {id: 1, text: "Blabla", author: 2, date: "2022-12-23"},
          {id: 2, text: "Blabla222", author: 2, date: "2022-12-23"},
        ];
        const author = authors.filter(author => author.id === article.author)[0];
        return (
          <Accordion.Item eventKey={article.id} key={article.id}  className='ArticleList-card'>
            <Vignette 
              article={article} 
              comments={comments} 
              reviewStatus={reviewStatus} 
              cardBorder={cardBorder}
              author={author}
            />
          </Accordion.Item>
        )})
      }
    </Accordion>
  )
}

export default ArticleList;