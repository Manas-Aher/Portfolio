import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container flex justify-center items-center'>
            <div className='text-center'>
                <p className='text-sm md:text-end'>
                    © {new Date().getFullYear()} Manas | Web Developer. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer