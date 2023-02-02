import React from 'react'
import '../Styles/Navbar.css'
import { TiLocationOutline } from "react-icons/ti";

export default function Navbar() {
    return (
        <>
            <nav className='container'>
                <ul>
                <li className='nav-list'><a href="#" className='nav-link'><TiLocationOutline className='loaction-icon'/>Ташкент</a></li>
                <li className='nav-list'><a href="#" className='nav-link'>About marketplace</a></li>
                <li className='nav-list'><a href="#" className='nav-link'>Privacy policy</a></li>
                <li className='nav-list'><a href="#" className='nav-link'>Terms of use</a></li>
                <li className='nav-list'><a href="#" className='nav-link'>Public offering</a></li>
                </ul>
                <div className="interface">
                    <li className='nav-list'><a href="#" className='nav-link link'>Interface language</a></li>
                    <li className='nav-list'><a href="#" className='nav-link link'>Have a question?</a></li>
                </div>
            </nav>
        </>
    )
}