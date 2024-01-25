import React from 'react'
import { CartItems } from '../components/Cartitems/CartItems'
import { motion } from 'framer-motion'

export const Cart = () => {
  return (
    <motion.div initial={{width:0}} animate={{width:'100%'}} exit={{x:window.innerWidth,transition:{duration:1}}}>
      <CartItems></CartItems>
    </motion.div>
  )
}
