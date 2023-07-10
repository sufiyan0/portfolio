'use client';

import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import './globals.css'
import Offer from './components/Offer'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {


  return (
    <>
       <div className="overflow-hidden fixed top-0 left-0 w-full">

        <Header />
       </div>
      <div className="w-full bg-slate-800">
        <Main/>
        <Offer/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
        

      </div>

    </>

  )
}