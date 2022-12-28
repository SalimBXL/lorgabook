import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Home from './components/Home';
import ArticleList from "./components/ArticleList";
import CategoryList from "./components/CategoryList";
import Article from './components/Article';
import ErrorPage from "./components/ErrorPage";
import { addDir } from "./utils/url";
import './App.css';

const API_URL = "http://localhost:3000/api/v1";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/articles/:articleId", element: <Article />, errorElement: <ErrorPage /> }
]);


function App() {  
  return (<div className="App">
    
    <header>
      <Header />
      <NavigationBar />
    </header>

    <aside>
      <ArticleList articles_path={addDir(API_URL, "articles")} />
      <CategoryList categories_path={addDir(API_URL, "categories")} />
    </aside>

    <main>
      <RouterProvider router={router} />
    </main>

    <footer>
    </footer>

  </div>);
}

export default App;
