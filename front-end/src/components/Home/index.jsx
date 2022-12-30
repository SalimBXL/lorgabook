import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../Header";
import NavigationBar from "../NavigationBar";
import "./Home.css";

function Home({articlesNotReviewed, articlesNotCompleted}) {
  return (<div className='Home'>
    <header>
      <Header />
      <NavigationBar />
    </header>

    <main className='Home-main'>
      <div>
        xx not completed / xx not yet reviewed
      </div>
      <Outlet />
    </main>

    <footer>
    </footer>

  </div>)
}

export default Home;