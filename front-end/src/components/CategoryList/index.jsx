import React from 'react'
import Badge from 'react-bootstrap/Badge';
import "./CategoryList.css";

function CategoryList({categories}) {
  return (
    <div className='CategoryList'>
      {Object.keys(categories).map(categoryKey => {
        const {name} = categories[categoryKey];
        return <Badge key={name} pill bg='info'>{name}</Badge>
      })}
    </div>
  )
}

export default CategoryList;