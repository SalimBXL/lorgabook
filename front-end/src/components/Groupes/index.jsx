import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./Groupes.css";

function Groupes({groupes}) {
  return (
    <div className='Groupes'>
      <h2>Groupes</h2>

      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            Object.values(groupes).map(groupe => {   
              return <tr key={groupe.id}>
                <td>{groupe.id}</td>
                <td>{groupe.name}</td>
                <td>{groupe.description}</td>
                <td>
                  <ButtonGroup size="sm">
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </ButtonGroup>
                </td>
              </tr>
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Groupes;