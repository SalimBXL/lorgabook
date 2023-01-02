import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./Authors.css";

function Authors({authors, groupes}) {
  return (
    <div className='Authors'>
      <h2>Authors</h2>

      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Groupe</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            Object.values(authors).map(author => {   
              const {id, firstname, lastname, email} = author;
              const fullName = `${firstname} ${lastname.toUpperCase()}`;
              const groupe = groupes[author.groupe].name;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{fullName}</td>
                  <td>{groupe}</td>
                  <td>{email}</td>
                  <td>
                    <ButtonGroup size="sm">
                      <Button>Edit</Button>
                      <Button>Delete</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Authors;