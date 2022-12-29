import React from 'react';
import { useRouteError } from "react-router-dom";
import Header from '../Header';
import "./ErrorPage.css";

function ErrorPage() {
  const error = useRouteError();
  return (<>
    <Header />
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p><i>{error.statusText || error.message}</i></p>
    </div>
  </>);
}

export default ErrorPage;