import React from 'react';
import Spinner from "react-bootstrap/Spinner";

function Loading({subject}) {
  return (
    <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        Loading{subject && ` ${subject}`}...
    </Spinner>)
}

export default Loading