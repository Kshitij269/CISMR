import React from 'react'
import Nav from '../components/navbar';
import Header from '../components/header';
import Caro from '../components/caro';
import Footer from '../components/footer'
import labData from '../components/labdata';
function Lab () {
  return (
    <>
    <Header/>
    <Nav/>
    <Caro data_list={labData}/> 
    <Footer/>
    </>
  )
}

export default Lab;

