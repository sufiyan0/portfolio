import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import { Info } from './components/Info'
export default function Home() {
  return (

    <div className="">

      <Header />
      <Hero />
      <Info />
    </div>


  )
}
