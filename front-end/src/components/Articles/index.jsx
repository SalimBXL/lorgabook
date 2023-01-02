import React from 'react';
import ArticleList from "../ArticleList";
import CategoryList from "../CategoryList";
import ClasseList from "../ClasseList";
import PaginationArticles from './PaginationArticles';
import Badge from 'react-bootstrap/Badge';
import "./Articles.css";

function Articles({articles, authors, categories, classes}) {
  const {notReviewed, notCompleted} = articles;


  return (<div className='Articles'>
    <div className='Articles-badges'>
      <CategoryList categories={categories} />
      <ClasseList classes={classes} />
    </div>

    <div className='Articles-middlebar'>
      <PaginationArticles total={null} />

      <Badge bg="light" text="dark" className='Articles-revs'>
        Reviews: &nbsp;
        {notReviewed && <Badge bg="danger">{notReviewed}</Badge>}&nbsp;
        {notCompleted && <Badge bg="warning" text="dark">{notCompleted}</Badge>}
      </Badge>
    </div>

    <ArticleList 
      articles={articles.articles} 
      authors={authors}
      categories={categories}
      classes={classes}
    />

    <PaginationArticles />
    
  </div>)
}

export default Articles;