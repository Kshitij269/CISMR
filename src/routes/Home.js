import React from 'react'
import Nav from '../components/navbar';
import Header from '../components/header';
import Caro from '../components/caro';
import Data from '../components/data';
import List from '../components/list'
import Footer from '../components/footer'
import homeData from '../components/homedata';

function Home () {
  return (
    <>
    <Header/>
    <Nav/>
    <Caro data_list={homeData}/> 
    <Data/>
    <List/>
    <Footer/>
    </>
  )
}

export default Home;

