import React, { Children, useMemo, useState } from 'react'
import "./Navbar.scss"
import {HiMenuAlt4,HiX} from "react-icons/hi"
import {motion} from "framer-motion"
import Logo from "../../assets/logo.png"

function Navbar() {
    const [toggle,setToggle] =useState(false)

  return (
    <nav className='app__navbar'>
        <div className='app__logo'>
            <img src={Logo} alt="logo" />
        </div>
        <ul className='app__navbar-links'>
            {useMemo(()=>["home","about","contact","work","skills"].map((menu=>{
                return <li key={`link-${menu}`} className="app__flex p-text">
                    <div />
                    <a href={`#${menu}`}>{menu}</a>
                </li>
            })),[])}
        </ul>
        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={()=>setToggle(true)} />
            {toggle && (
                <motion.div whileInView={{x:[300,0]}} transition={{duration:0.85,ease:"easeInOut"}}>
                    <HiX onClick={()=>setToggle(false)} />
                    <ul>
                    {Children.toArray(["home","About","contact","work","skills"].map(menu=>(
                        <li  className="app__flex p-text">
                        <a href={`#${menu}`} onClick={()=>setToggle(false)}>{menu}</a>
                    </li>
                    )))}
                    </ul>
                </motion.div>
            )}
        </div>
    </nav>
  )
}

export default Navbar 