import React from 'react'
import Navbar from '../Navbar'
import Herosection from '../Herosection'
import Contentsection from '../Contentsection'
import Gallerysection from '../Gallerysection'
import Hoversection from '../Hoversection'
import Featuresection from '../Featuresection'
import Pricingsection from '../Pricingsection'
import Teamsection from '../Teamsection'
import Testimonialsection from '../Testimonialsection'
import Contactsection from '../Contactsection'
import Footersection from '../Footersection'

const Landingpage = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Contentsection/>
      <Gallerysection/>
      <Hoversection/>
      <Featuresection/>
      <Pricingsection/>
      <Teamsection/>
      <Testimonialsection/>
      <Contactsection/>
      <Footersection/>
    </div>
  )
}

export default Landingpage
