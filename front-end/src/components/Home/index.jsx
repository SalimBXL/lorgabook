import React from 'react';
import Header from "../Header";
import NavigationBar from "../NavigationBar";
import ArticleList from "../ArticleList";
import CategoryList from "../CategoryList";
import { useFetchArticles, useFetchCategories } from '../../utils/fetching'; 
import Loading from '../Loading';
import "./Home.css";



function Home() {
  const { categories, loadingCategories } = useFetchCategories();
  const { articles, loadingArticles } = useFetchArticles();
  
  return (<div className='Home'>
    <header>
      <Header />
      <NavigationBar />
    </header>

    <main>
      
      <div className='Home-categories'>
        { loadingCategories 
          ? <Loading subject="catagories" />
          : <CategoryList categories={categories} />
        }
      </div>

      <div className='Home-articles'>
        { loadingArticles 
          ? <Loading subject="articles" />
          : <ArticleList articles={articles} />
        }
      </div>
      
    </main>

    <footer>
    </footer>
  </div>)
}

export default Home;