import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import post from '../helpers/postDetail'
import { useParams } from 'react-router-dom'


export default function Posts() {
  const {id} = useParams();
 
  return (
    <div>
        <Navbar/>
        {post(id)}
        <Footer/>
    </div>
  )
}


