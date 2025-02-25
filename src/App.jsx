import React, { createContext, useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashBoard from './page/dashBoard/DashBoard';
import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';


const MyContext = createContext();

const App = () => {

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const router = createBrowserRouter ([
    {
      path:"/",
      element: (
          <>
            <section className='main'>
              <Header />
              <div className="contentMain flex">
                <div className={`overflow-hidden sideBarWrapper ${isSideBarOpen===true ? 'w-[18%]' : 'w-[0px] opacity-0'} transition-all`}>
                  <SideBar />
                </div>

                <div className={`overflow-hidden contentRight py-4 px-5 ${isSideBarOpen===false ? 'w-[100%]' : 'w-[82%]' } transition-all`}>
                  <DashBoard />
                </div>
              </div>
            </section>
          </>
      ),
    },
]);

  const values = {
    // add your state and methods here
    isSideBarOpen,
    setIsSideBarOpen,

  };

  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router}/>
      </MyContext.Provider>
    </>
  )
}

export default App;
export {MyContext};
