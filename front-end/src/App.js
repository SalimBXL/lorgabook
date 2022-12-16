import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import ArticleList from "./components/ArticleList";
import CategoryList from "./components/CategoryList";
import axios from "axios";
import DataTable from "./components/data_table";
import { addDir } from "./utils/url";
import './App.css';

import Article from "./components/Article";


const API_URL = "http://localhost:3000/api/v1";

function getAPIData(url) {
  console.log("...getAPIData @", url);
  return axios
    .get(url)
    .then(response => response.data);
}

function App() {
  const [categories, setCategories] = useState([]);
  const [classes, setClasses] = useState([]);
  const [groupes, setGroupes] = useState([]);
  const [authors, setAuthors] = useState([]);
  

  useEffect(() => {
    let loading = true;
    //getAPIData(addDir(API_URL, "categories")).then(items => loading && setCategories(items));
    //getAPIData(addDir(API_URL, "classes")).then(items => loading && setClasses(items));
    //getAPIData(addDir(API_URL, "groupes")).then(items => loading && setGroupes(items));
    //getAPIData(addDir(API_URL, "authors")).then(items => loading && setAuthors(items));
    //getAPIData(addDir(API_URL, "articles")).then(items => loading && setArticles(items));
    return () => (loading = false)
  }, []);

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
  
    <h2>TABLES</h2>
      <DataTable datas={categories} tableName="Categories" />
      <DataTable datas={classes} tableName="Classes" />
      <DataTable datas={groupes} tableName="Groupe" />
      <DataTable datas={authors} tableName="Authors" />
    </main>

    <footer>
    </footer>

    <Article article={
      {
        title: "titre", 
        text: "text",
        author: 1,
        category: 1,
        classe: 1, 
        groupe: 1,
        reviewed: true,
        completed: true,
        reviewer: 2
      }
    } />

  </div>);
}

export default App;
