import { useEffect, useState } from "react";
import axios from "axios";
import { addDir } from "./url";


const API_URL = "http://localhost:3000/api/v1";


const useFetchArticles = () => {
  const _articles = { notReviewed: 0, notCompleted: 0, articles: [] };
  const [articles, setArticles] = useState(_articles);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(addDir(API_URL, "articles"))
      .then(response => response.data)
      .then(items => {
        const _articles = {
          notReviewed: items.not_reviewed,
          notCompleted: items.not_completed,
          fullyReviewed: items.fully_reviewed,
          totalArticles: items.articles_total,
          lastArticles: items.lasts,
          articles: items.articles,
        };
        return setArticles(_articles);
      });
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


const useFetchClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(addDir(API_URL, "classes"))
      .then(response => response.data)
      .then(items => setClasses(items));
      setLoading(false);
  }, []);
  return { classes, loading };
}


const useFetchGroupes = () => {
  const [groupes, setGroupes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(addDir(API_URL, "groupes"))
      .then(response => response.data)
      .then(items => setGroupes(items));
      setLoading(false);
  }, []);
  return { groupes, loading };
}


const useFetchAuthors = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(addDir(API_URL, "authors"))
      .then(response => response.data)
      .then(items => setAuthors(items));
      setLoading(false);
  }, []);
  return { authors, loading };
}


export { useFetchArticles, useFetchCategories, useFetchClasses, useFetchGroupes, useFetchAuthors };