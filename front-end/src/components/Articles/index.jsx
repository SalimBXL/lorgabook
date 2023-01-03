import React from 'react';
import ArticleList from "../ArticleList";
import CategoryList from "../CategoryList";
import ClasseList from "../ClasseList";
import PaginationArticles from './PaginationArticles';
import ReviewsResume from '../ReviewsResume';
import "./Articles.css";



function Articles({articles, authors, categories, classes}) {
  const {notReviewed, notCompleted} = articles;
  return (<div className='Articles'>
    <div className='Articles-topbar'>
      <div className='Articles-badges'>
        <CategoryList categories={categories} />
        <ClasseList classes={classes} />
      </div>
      <div className=''>
        <ReviewsResume notReviewed={notReviewed} notCompleted={notCompleted} />
      </div>
    </div>

    <div className='Articles-middlebar'>
      <PaginationArticles  />
      <div className='revs-middlebar'>
        <ReviewsResume notReviewed={notReviewed} notCompleted={notCompleted} />
      </div>
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