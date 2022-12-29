import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import Article from './components/Article';
import ErrorPage from "./components/ErrorPage";
import './App.css';

const router = createBrowserRouter([
  { path: "/", 
    element: <Home />, 
    errorElement: <ErrorPage />, 
    children: [
      { path: "articles/:articleId", 
        element: <Article />, 
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {  
  return (<div className="App">
    <RouterProvider router={router} />
  </div>);
}

export default App;
