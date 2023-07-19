import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {
const [show, handleShow] = useState(false);

const transNavBar = () => {
    if(window.scrollY > 100){   //y axis scrolling
        handleShow(true);
    }
    else{
        handleShow(false);
    }
}

useEffect(() => {
    window.addEventListener('scroll', transNavBar);
    return () => window.removeEventListener('scroll', transNavBar);
}, [])
    return (
    <div className={`nav ${show && 'nav__black'}/*only add the nav black when show var is true*/`}>
        <div className='nav__contents'>
            <img className='nav__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/8/8e/Twemoji2_1f602.svg' 
            alt=''/>
            <img className='nav__avatar' src='' alt='' />
        </div>
    </div>
    )
}

export default Nav
