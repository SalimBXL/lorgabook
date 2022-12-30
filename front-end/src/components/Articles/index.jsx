import React from 'react';
import ArticleList from "../ArticleList";
import CategoryList from "../CategoryList";
import ClasseList from "../ClasseList";
import Loading from '../Loading';
import { 
  useFetchArticles, 
  useFetchAuthors, 
  useFetchCategories, 
  useFetchClasses, 
  useFetchGroupes 
} from '../../utils/fetching';
import "./Articles.css";

function Articles() {
  const { categories, loadingCategories } = useFetchCategories();
  const { classes, loadingClasses } = useFetchClasses();
  const { groupes, loadingGroupes } = useFetchGroupes();
  const { articles, loadingArticles } = useFetchArticles();
  const { authors, loadingAuthors } =useFetchAuthors();
  return (<div className='Articles'>
    {loadingCategories && <Loading subject="catagories" />}
      {loadingClasses && <Loading subject="classes" />}
      {loadingGroupes && <Loading subject="groupes" />}
      {loadingAuthors && <Loading subject="authors" />}
      {loadingArticles && <Loading subject="articles" />}
    <div className='Articles-badges'>
      <CategoryList categories={categories} />
      <ClasseList classes={classes} />
    </div>
    <ArticleList 
      articles={articles.articles} 
      authors={authors}
      categories={categories}
      classes={classes}
    />
  </div>)
}

export default Articles;