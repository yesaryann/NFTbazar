import React from 'react'
import "./App.css"
import Header from './components/Header/header'
import Topfile from './components/topfile/topfile'
import Info from './components/info/info'
import Footer from './components/footer/footer'
import Trends from './components/Trends/Trends'
import Brands from './components/Brands/Brands'

const App = () => {
  return (
    <div className='max-width'>
      <Header/>
      <Topfile/>
      <Brands/>
      <Trends/>
      <Info/>
      
      <Footer/>


      
      
       </div>
  )
}

export default App