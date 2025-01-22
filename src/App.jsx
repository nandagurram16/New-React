import React, { useEffect, useState } from 'react'
import Landingpage from './TailwindBlocks/Components/Pages/Landingpage'

const App = () => {
  const [theme,settheme]=useState('light')

  useEffect(() =>{
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    }
  })
  return (
    <div>
      <Landingpage/>
    </div>
  )
}

export default App
