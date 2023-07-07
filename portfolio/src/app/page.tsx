import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'


import './globals.css'

export default function Home() {


  return (
    <>
      <div className="max-w-full bg-gray-200">
        <Header />
        <Main/>
        <About/>
        <h1>!</h1>

      </div>

    </>

  )
}