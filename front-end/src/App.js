import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { 
  useFetchCategories, 
  useFetchClasses,
  useFetchAuthors,
  useFetchGroupes,
  useFetchArticles,
} from './utils/fetching';
import Loading from './components/Loading';
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import { routes } from "./routes";
import './App.css';


function App() {
  const [router, setRouter] = useState();
  const [loading, setLoading] = useState(false);
  const { categories, loadingCategories } = useFetchCategories();
  const { classes, loadingClasses } = useFetchClasses();
  const { groupes, loadingGroupes } = useFetchGroupes();
  const { authors, loadingAuthors } = useFetchAuthors();
  const { articles, loadingArticles } = useFetchArticles();

  useEffect(() => {
    setLoading(true);
    setRouter(() => {
      const router = createBrowserRouter(routes({
        categories: categories,
        classes: classes,
        authors: authors,
        groupes: groupes,
        articles: articles,
      }));
      setLoading(false);
      return router;
    });
  }, [groupes, authors, classes, categories, articles]);
  
  
  
  return (<div className="App">
    <header>
      <Header />
      <NavigationBar />
    </header>

    <main>
      {loading && <Loading subject="datas from server" />}
      {loadingCategories && <Loading subject="categories" />}
      {loadingClasses && <Loading subject="classes" />}
      {loadingGroupes && <Loading subject="groupes" />}
      {loadingAuthors && <Loading subject="authors" />}
      {loadingArticles && <Loading subject="articles" />}
      {router && <RouterProvider router={router} />}
    </main>

    <footer>
    </footer>


    
  </div>);
}

export default App;
