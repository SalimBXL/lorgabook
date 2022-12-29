import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./SearchForm.css";

function SearchForm() {
    return (
        <Form id="search-form" role="search" className='Search'>
            <Form.Control type="text" placeholder='Search...' />
            <Button variant="primary" type="submit">Search</Button>
        </Form>
    )
}

export default SearchForm