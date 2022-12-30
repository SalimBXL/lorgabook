import React from 'react';
import { useRouteError } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import "./ErrorPage.css";

function ErrorPage() {
  const error = useRouteError();
  return (<>
    <Container>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occured.</p>
        <p><i>{error.statusText || error.message}</i></p>
      </div>
    </Container>
  </>);
}

export default ErrorPage;