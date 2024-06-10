"use client"
import React, { useEffect } from 'react'
import FullCenteredPage from 'funuicss/ui/specials/FullCenteredPage'
import Section from 'funuicss/ui/specials/Section'
import Text from 'funuicss/ui/text/Text'
import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'
import Button from 'funuicss/ui/button/Button'
import {PiAndroidLogo, PiCheck} from "react-icons/pi"
import AppBar from 'funuicss/ui/appbar/AppBar'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import Link from 'next/link'
import Animation from "funuicss/ui/aos/AOS" 
import Aos from "aos"

export default function Home() {
  const download_link = ""
  useEffect(() => {
    Aos.init()
    }, [])
    
  return (
    <div>
      <div style={{minHeight:'90vh'}} className='flex central'>
<div className="width-900-max center">
<Grid justify="center" align="center">
<Col  sm={10} md={4} lg={4} funcss='padding'>
<Animation >
<img src='/1.png' className='fit hover-up'/>
</Animation>
  </Col>
<Col  sm={10} md={6} lg={6} funcss='padding'>
<Animation >
<Text 
text="Install the App"
heading="h1"
color="primary"
bold
block
/>
<Text 
text="GSS indicator  "
heading="h4"
/>
<Section/>
<Text 
text="Use the app to check the Ghana Statistical Service indicators for all the regions in Ghana"
block 
article 
size="minified"
color="dark400"
/>
<Section gap={1}/>
<Link href={download_link}>
<Button 
bold
raised 
bg={"gradient"}
startIcon={<PiAndroidLogo />}
text={"Download App"}

/>
</Link>
</Animation>
  </Col>
  </Grid>
</div>
</div>
<Animation className={`main_section dark900 text-dark`}>
<div className="width-900-max center ">
<Grid justify="center" align="center">

<Col  sm={10} md={6} lg={6} smOrder={2} mdOrder={2} funcss='padding'>
<Animation >
<Text 
text="Explore Indicators"
heading="h1"
color="primary"
bold
block
/>
<Text 
text="Choose from numerous indicators."
heading="h4"
/>
<Section />
<RowFlex gap={1} alignItems='flex-start' funcss='section'>
  <div>
    <PiCheck className='text-primary' />
  </div>
  <div>
  <Text 
text="Within the selected region and district, explore various indicators available."
block 
article 
size="minified"
/>
  </div>
</RowFlex>
<RowFlex gap={1} alignItems='flex-start' funcss='section'>
  <div>
    <PiCheck className='text-primary' />
  </div>
  <div>
  <Text 
text="These may include population demographics, economic performance, education statistics and more"
block 
article 
size="minified"
/>
  </div>
</RowFlex>

</Animation>
  </Col>
  <Col  sm={12} md={5} lg={5}  funcss='padding text-center'>
  <Animation >
<img src='/2.png' className='fit hover-up width-300-max fit'/>
</Animation>
  </Col>
  </Grid>
</div>
</Animation>

    </div>
  )
}
