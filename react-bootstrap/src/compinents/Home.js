import React from 'react'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import SectionOne from './SectionOne'
import CardComp from './CardComp';
import Facts from './Facts';
import MoneyBack from './MoneyBack';
import Contact from './Contact';
import Footer from './Footer';



const Home = () => {
  return (
    <div>
      <Header />
      <SectionOne />
      <CardComp/>
      <MoneyBack />
      <Facts />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
