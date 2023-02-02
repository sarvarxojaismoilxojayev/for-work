import React from 'react';
import '../Styles/Search.css';
import logo from '../assets/1.png';
import { HiSearch } from "react-icons/hi";
import { RxBookmarkFilled } from "react-icons/rx";
import { HiOutlineUser } from "react-icons/hi";

export default function Search() {

    function name(e) {
        e.preventDefault()
    }

    return (
        <>
            <section className='container repository'>
                <img src={logo} alt="" />
                <form action="">
                    <input type="text" onSubmit={name} className="info-input" placeholder='Search...'/>
                    <HiSearch className='search-icon'/>
                </form>
                <div className="icon">
                    <RxBookmarkFilled className='saved-massage' /> <div className='danger-color'></div>
                    <HiOutlineUser className='user-icon' /> <div className='danger-color'></div> 
                </div>
            </section>
        </>
    )
}
