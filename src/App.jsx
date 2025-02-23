import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashBoard from './page/dashBoard/DashBoard';
import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';




const App = () => {

  const router = createBrowserRouter ([
    {
      path:"/",
      element: (
          <>
            <section className='main'>
              <Header />
              <div className="contentMain flex">
                <div className="sideBarWrapper w-[18%]">
                  <SideBar />
                </div>

                <div className="contentRight py-4 px-5 w-[82%]">
                  <DashBoard />
                </div>
              </div>
            </section>
          </>
      ),
    },
]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;

