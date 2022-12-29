import { useEffect, useState } from "react";
import axios from "axios";
import { addDir } from "./url";


const API_URL = "http://localhost:3000/api/v1";


const useFetchArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(addDir(API_URL, "articles"))
      .then(response => response.data)
      .then(items => setArticles(items));
      setLoading(false);
  }, []);
  return { articles, loading };
}


const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(addDir(API_URL, "categories"))
      .then(response => response.data)
      .then(items => setCategories(items));
      setLoading(false);
  }, []);
  return { categories, loading };
}


export { useFetchArticles, useFetchCategories };