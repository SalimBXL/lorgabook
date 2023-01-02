import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import "./PaginationArticles.css";

function PaginationArticles({total = 1}) {
  let active = 2;
  let items = [];
  for (let number = 1; number <= total; number++) {
    items.push(<Pagination.Item key={number} active={number === active}>{number}</Pagination.Item>,);
  }
  return (
    <Pagination className='PaginationArticle' size="sm">
      <Pagination.First />
      <Pagination.Prev />
      {items}
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  )
}

export default PaginationArticles;