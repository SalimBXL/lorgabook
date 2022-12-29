import React from 'react'
import Badge from 'react-bootstrap/Badge';
import "./GroupeList.css";

function GroupeList({groupes}) {
  return (
    <div className='GroupeList'>
      {groupes.map(groupe => <Badge key={groupe.name} pill bg='secondary'>{groupe.name}</Badge>)}
    </div>
  )
}

export default GroupeList;