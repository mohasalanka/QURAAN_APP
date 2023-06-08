import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import CreateSurah from './components/CreateSurah';
import SurahDetails from './components/SurahDetails';
import SurahList from './components/SurahList';
import './App.css'; // Import the CSS file
import Layout from './Layout';


function App() {
  const router=createBrowserRouter(
    [{
      path:'/',
      element:<Layout/>,
      children:
      [
        {
        path :'/',
        element: <Home/>
      },
      {
        path :'/surahs',
        element: <SurahList/>
      },
      {
        path :'/surahs/details',
        element: <SurahDetails/>
      },
      {
        path :'/surahs/create',
        element: <CreateSurah/>
      },

    ]
  }]
    )
    return (
      <RouterProvider router={router}/>
      )
    }

export default App

