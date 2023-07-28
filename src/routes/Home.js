import React from 'react'
import Nav from '../components/navbar';
import Header from '../components/header';
import Caro from '../components/caro';
import Data from '../components/data';
import List from '../components/list'
import Footer from '../components/footer'
function Home () {
  return (
    <>
    <Header/>
    <Nav/>
    <Caro/> 
    <Data/>
    <List/>
    <Footer/>
    </>
  )
}

export default Home;

