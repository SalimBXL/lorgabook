import React from 'react';
import Header from "../Header";
import NavigationBar from "../NavigationBar";
import ArticleList from "../ArticleList";
import CategoryList from "../CategoryList";
import ClasseList from "../ClasseList";
import GroupeList from "../GroupeList";
import { useFetchArticles, useFetchCategories, useFetchClasses, useFetchGroupes } from '../../utils/fetching'; 
import Loading from '../Loading';
import "./Home.css";



function Home() {
  const { categories, loadingCategories } = useFetchCategories();
  const { classes, loadingClasses } = useFetchClasses();
  const { groupes, loadingGroupes } = useFetchGroupes();
  const { articles, loadingArticles } = useFetchArticles();
  
  return (<div className='Home'>
    <header>
      <Header />
      <NavigationBar notReviewed={articles.notReviewed} notCompleted={articles.notCompleted} />
    </header>

    <main>
      <div className='Home-badges'>
        <div>
          { loadingCategories 
            ? <Loading subject="catagories" />
            : <CategoryList categories={categories} />
          }
        </div>

        <div>
          { loadingClasses 
            ? <Loading subject="classes" />
            : <ClasseList classes={classes} />
          }
        </div>

        <div>
          { loadingGroupes 
            ? <Loading subject="groupes" />
            : <GroupeList groupes={groupes} />
          }
        </div>
      </div>

      <div>
        { loadingArticles 
          ? <Loading subject="articles" />
          : <ArticleList articles={articles.articles} />
        }
      </div>
      
    </main>

    <footer>
    </footer>
  </div>)
}

export default Home;