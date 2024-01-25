import React from 'react'
import {Hero} from '../components/Hero/Hero'
import { Popular } from '../components/Popular/Popular'
import { Offers } from '../components/Offers/Offers'
import { Newcollection } from '../components/NewCollections/Newcollection'
import { Newsletter } from '../components/Newsletter/Newsletter'
import { motion } from 'framer-motion'

export const Shop = () => {
  return (
    <motion.div initial={{width:0}} animate={{width:'100%'}} exit={{x:window.innerWidth,transition:{duration:1}}} >
      <Hero></Hero>
      <Popular></Popular>
      <Offers></Offers>
      <Newcollection></Newcollection>
      <Newsletter></Newsletter>
    </motion.div>
  )
}
