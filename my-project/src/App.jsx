import React from 'react'
import Navbar from './assets/Components/Navbar'
import Hero from './assets/Components/Hero'
import Toplist from './assets/Components/Toplist'
 import BgImage from './assets/2.png';
import Banner from './assets/Components/Banner';
import Services from './assets/Components/Services';

 const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroungRepeat:'no-repeat',
  backgroundSize: "cover",
  backgroundPosition: "center",

 };

const App = () => {
  return (
    <div style={bgStyle} className='overflow-x-hidden'>
      <div className='min-h-screen bg-white/50 backdrop-blur-3xl'>
      
        <Navbar />
        <Hero />
        <Toplist />
        <Banner />
        <Services />
      </div>
    </div>
  )
}

export default App