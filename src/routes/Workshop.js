import React from 'react'
import Nav from '../components/navbar';
import Header from '../components/header';
import Caro from '../components/caro';
import Footer from '../components/footer'
import workshopData from '../components/workshopdata';
function Workshop () {
  return (
    <>
    <Header/>
    <Nav/>
    <Caro data_list={workshopData}/> 
    <Footer/>
    </>
  )
}

export default Workshop;

