import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./Classes.css";

function Classes({classes}) {
  return (
    <div className='Classes'>
      <h2>Classes</h2>

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
            Object.values(classes).map(classe => {   
              return <tr key={classe.id}>
                <td>{classe.id}</td>
                <td>{classe.name}</td>
                <td>{classe.description}</td>
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

export default Classes;