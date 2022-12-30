import React from 'react'
import Badge from 'react-bootstrap/Badge';
import "./ClasseList.css";

function ClasseList({classes}) {
  return (
    <div className='ClasseList'>
      {Object.keys(classes).map(classeKey => {
        const {name} = classes[classeKey];
        return <Badge key={name} pill bg='primary'>{name}</Badge>
      })}
    </div>
  )
}

export default ClasseList;