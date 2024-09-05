import HomePage from "./HomePage";
import Cuisine from './Cuisine';
import Layout from "../components/Layout";
import Searched from "./Searched";
import Recipe from "./Recipe";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

export default function Pages() {
  const router =  createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<Layout> <HomePage/> </Layout>} /> 
    <Route path="/Cuisine/:type" element={<Layout> <Cuisine/> </Layout>} />
    <Route path="/searched/:search" element={<Layout> <Searched/> </Layout>} /> 
    <Route path="/recipe/:id" element={<Layout> <Recipe/> </Layout>}/>
    </>
  ))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )

}
