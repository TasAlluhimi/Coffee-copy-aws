import React, { useState } from 'react'
import Nav from '../Components/Nav'
import axios from 'axios'
import m from '../assets/m.jpg'
import Footer from '../Components/Footer'

function Home() {

    
  return (
    <>
       <Nav/>
       <div 
        style={{backgroundImage: `url(${m})`}}
        className='h-screen'>

        </div>
        <Footer/>
    </>
  )
}

export default Home