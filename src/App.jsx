import React, {useEffect, useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashBoard from './page/dashBoard/DashBoard';
import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';
import { createContext } from 'react';

const MyContext = createContext();

const App = () => {

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);


  const router = createBrowserRouter ([
    {
      path:"/",
      exact: true,
      element: (
          <>
            <section className="main">
              <Header />
              <div className="contentMain flex">
                <div className={`overflow-hidden sidebarWrapper ${isSideBarOpen===true ? 'w-[18%]' : 'w-[0px] opacity-0'} transition-all`}>
                  <SideBar />
                </div>

                <div className={`contentRight py-4 px-5 ${isSideBarOpen===false ? 'w-[100%]' : 'w-[82%]' } transition-all`}>
                  <DashBoard />
                </div>
              </div>
            </section>
          </>
      ),
    },
]);


const values = {
    
  isSideBarOpen,
  setIsSideBarOpen,
};

 
  // useEffect(() => {

  //   alert(isToggleSidebar);

  // },[isToggleSidebar]);

  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router}/>
      </MyContext.Provider>
    </>
  )
}

export default App;
export { MyContext };
