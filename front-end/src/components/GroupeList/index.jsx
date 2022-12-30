import React from 'react'
import Badge from 'react-bootstrap/Badge';
import "./GroupeList.css";

function GroupeList({groupes}) {
  return (
    <div className='GroupeList'>
      {Object.keys(groupes).map(groupeKey => {
        const {name} = groupes[groupeKey];
        return <Badge key={name} pill bg='secondary'>{name}</Badge>
      })}
    </div>
  )
}

export default GroupeList;