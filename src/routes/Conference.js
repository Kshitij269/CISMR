import React from 'react'
import Nav from '../components/navbar';
import Header from '../components/header';
import Caro from '../components/caro';
import Footer from '../components/footer'
import conferenceData from '../components/conferencedata';
function Conference () {
  return (
    <>
    <Header/>
    <Nav/>
    <Caro data_list={conferenceData}/> 
    <Footer/>
    </>
  )
}

export default Conference;

