import React from 'react'
import Badge from 'react-bootstrap/Badge';
import "./ClasseList.css";

function ClasseList({classes}) {
  return (
    <div className='ClasseList'>
      {classes.map(classe => <Badge key={classe.name} pill bg='primary'>{classe.name}</Badge>)}
    </div>
  )
}

export default ClasseList;