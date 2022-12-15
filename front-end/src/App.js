import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "./components/data_table";
import { addDir } from "./utils/url";
import './App.css';

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
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let loading = true;
    getAPIData(addDir(API_URL, "categories")).then(items => loading && setCategories(items));
    getAPIData(addDir(API_URL, "classes")).then(items => loading && setClasses(items));
    getAPIData(addDir(API_URL, "groupes")).then(items => loading && setGroupes(items));
    getAPIData(addDir(API_URL, "authors")).then(items => loading && setAuthors(items));
    getAPIData(addDir(API_URL, "articles")).then(items => loading && setArticles(items));
    return () => (loading = false)
  }, []);

  return (<div className="App">
    <h1>TEST</h1>
  
    <h2>TABLES</h2>
    <DataTable datas={categories} tableName="Categories" />
    <DataTable datas={classes} tableName="Classes" />
    <DataTable datas={groupes} tableName="Groupe" />
    <DataTable datas={authors} tableName="Authors" />
    <DataTable datas={articles} tableName="Articles" />

  </div>);
}

export default App;
