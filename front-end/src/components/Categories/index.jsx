import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./Categories.css";

function Categories({categories}) {
  return (
    <div className='Categories'>
      <h2>Categories</h2>

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
            Object.values(categories).map(category => {   
              return <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
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

export default Categories;