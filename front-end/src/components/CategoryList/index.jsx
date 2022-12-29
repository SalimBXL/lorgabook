import React from 'react'
import Badge from 'react-bootstrap/Badge';
import "./CategoryList.css";

function CategoryList({categories}) {
  return (
    <div className='CategoryList'>
      {categories.map(category => <Badge key={category.name} pill bg='info'>{category.name}</Badge>)}
    </div>
  )
}

export default CategoryList;