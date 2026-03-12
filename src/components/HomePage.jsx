import React from 'react'
import '../index.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Pbody from './Pbody'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div className='container'>

        <Header/>
        <Sidebar/>
        <Pbody/>
        <Footer/>  
    </div>
  )
}

export default HomePage