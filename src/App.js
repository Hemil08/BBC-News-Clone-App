import React from "react"
import Signin from "./components/Signin"
import Navbar from "./components/Navbar"
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Main from "./components/Main"
import NewsDetails from "./components/NewsDetails"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/details" element={<NewsDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}