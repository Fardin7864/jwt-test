import React from 'react'
import "react-loading-skeleton/dist/skeleton.css";
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom';
import Mainroute from './routes/Mainroute.jsx';
import Authprovider from './providers/Authprovider/Authprovider';
import { SkeletonTheme } from 'react-loading-skeleton';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <SkeletonTheme  baseColor="#d9d9d9">
    <RouterProvider router={Mainroute}></RouterProvider>
    </SkeletonTheme>
    </Authprovider>
  </React.StrictMode>,
)
