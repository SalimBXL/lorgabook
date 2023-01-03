import React from "react";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Categories from "./components/Categories";
import Classes from "./components/Classes";
import Articles from "./components/Articles";
import Groupes from "./components/Groupes";
import Authors from "./components/Authors";

const routes = ({categories, classes, groupes, authors, articles}) => [
    { 
        path: "/", 
        element: <Home 
            lastArticles={articles.lastArticles}
            articlesNotReviewed={articles.notReviewed}
            articlesNotCompleted={articles.notCompleted}
            totalArticles={articles.totalArticles}
            fullyReviewed={articles.fullyReviewed}
        />, 
        errorElement: <ErrorPage />, 
        children: [],
    },
    {
        path: "/articles", 
        element: <Articles
            articles={articles}
            authors={authors}
            classes={classes}
            categories={categories}
        />, 
        errorElement: <ErrorPage />, 
    },
    {
        path: "categories",
        element: <Categories categories={categories} />,
        errorElement: <ErrorPage />,
    },
    {
        path: "classes",
        element: <Classes classes={classes} />,
        errorElement: <ErrorPage />,
    },
    {
        path: "groupes",
        element: <Groupes groupes={groupes} />,
        errorElement: <ErrorPage />,
    },
    {
        path: "authors",
        element: <Authors authors={authors} groupes={groupes} />,
        errorElement: <ErrorPage />,
    },
];

export { routes };