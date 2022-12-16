import React, { useState, useEffect } from 'react'
import axios from "axios";
import Badge from 'react-bootstrap/Badge';
import "./CategoryList.css";

function CategoryList({categories_path}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let loading = true;
    axios
      .get(categories_path)
      .then(response => response.data)
      .then(items => loading && setCategories(items));
    return () => (loading = false)
  }, [categories_path]);

  return (
    <>
      <h2>Categories</h2>
      {categories.map(category => <Badge key={category.name} pill bg='info'>{category.name}</Badge>)}
    </>
  )
}

export default CategoryList;