import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import { titleize, mergeNamesOfAuthor } from '../../../utils/text';
import { dateYMDFormated } from '../../../utils/date';
import "./Vignette.css";

function VignetteHeader({article, comments, reviewStatus, author, cardBorder, category, classe}) {
    const {created_at, title} = article;
    return (
      <Accordion.Header>
        <div className='ArticleList-card-pill'>
          {reviewStatus !== 2 && <Badge pill bg={cardBorder}>!</Badge>}
        </div>
        <div className="ArticleItemList">
          <div className="ArticleItemList-title">
            {titleize(title)}
            {(comments.length > 0) && <Badge bg="dark" pill>{comments.length}</Badge>}
          </div>
          <div className='ArticleItemList-subtitle'>          
            ({dateYMDFormated(created_at)} by {author})
          </div>
          <div className='ArticleItemList-footer'>
            <div>
              <Badge pill bg="primary">{classe ? classe.name : "-"}</Badge> &nbsp; 
              <Badge pill bg="info">{category ? category.name : "-"}</Badge> &nbsp;
              {reviewStatus !== 2 && 
                <Badge bg="light" text="dark">
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
  
  function VignetteComments({comments, authors}) {
    return (<div>
      <hr />
      <h5>Comments</h5>
      {comments.map(comment => {
        const {id, created_at, author, text} = comment;
        const _author = mergeNamesOfAuthor(authors[author]);
        const _date = dateYMDFormated(created_at);
        return (
          <div className='ArticleItemList-comments' key={id}>
            <div className="ArticleItemList-comments-authorDate">
              <span className="ArticleItemList-comments-author">{_author}</span>
              <span className="ArticleItemList-comments-date">{_date}</span>
            </div>
            <div className='ArticleItemList-comments-text'>
              {text}
              <hr />
            </div>
          </div>
        )}
      )}
    </div>);
  }
  
  function VignetteBody({article, comments, authors}) {
    return (
      <Accordion.Body>
        {article.text}
        {comments && <VignetteComments comments={comments} authors={authors} />}
      </Accordion.Body>
    );
  }
  
  function Vignette({article, comments, reviewStatus, authors, cardBorder, classe, category}) {
    return (<>
      <VignetteHeader
        article={article} 
        comments={comments} 
        reviewStatus={reviewStatus} 
        author={mergeNamesOfAuthor(authors[article.author])}
        category={category}
        classe={classe}
        cardBorder={cardBorder}
      />
      <VignetteBody 
        article={article} 
        comments={comments}
        authors={authors}
      />
    </>);
  }

  export default Vignette;