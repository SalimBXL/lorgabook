import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import Categories from "./components/Categories";
import Article from './components/Article';
import Articles from "./components/Articles";
import ErrorPage from "./components/ErrorPage";
import './App.css';

const router = createBrowserRouter([
  { path: "/", 
    element: <Home />, 
    errorElement: <ErrorPage />, 
    children: [
      {
        path: "/articles", 
        element: <Articles />, 
        errorElement: <ErrorPage />, 
      },
      {
        path: "categories",
        element: <Categories />,
        errorElement: <ErrorPage />,
      },
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
