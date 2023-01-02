import React from 'react';
import Spinner from "react-bootstrap/Spinner";

function Loading({subject}) {
  return (<>
    <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>
    <br />
    <span><small>Loading{subject && ` ${subject}`}...</small></span>
  </>);
}

export default Loading