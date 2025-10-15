import { StrictMode } from 'react'
import { createRoot,ReactDom } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import Frame from './components/Frame/Frame.jsx';
import Crops from './components/Crops/Crops.jsx';
import CropRec from './components/CropRec/CropRec.jsx';
import CallBotPage from './components/CallBot/CallBot.jsx';
import SoilHealth from './components/SoilHealth/SoilHealth.jsx';
import FireAlert from './components/FireAlert/FireAlert.jsx';


// const router = createBrowserRouter([
//   {
//     path : '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path: 'about',
//         element: <About/>
//       },
//       {
//         path: 'contact',
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/crops' element={<Crops/>}/>
      <Route path='/crops/frame?' element={<Frame/>}/>
      <Route path='/crops/rec' element={<CropRec/>}/> 
      <Route path='/callbot' element={<CallBotPage/>}/>
      <Route path='/soilhealth' element={<SoilHealth/>}/>
      <Route path='/fireAlert' element={<FireAlert/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
