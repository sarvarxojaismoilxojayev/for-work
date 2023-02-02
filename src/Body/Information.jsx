import React from 'react'
import '../Styles/Information.css'
import Svg from '../assets/2.png'
import { FiUserCheck } from "react-icons/fi";
import { HiOutlineChatBubbleBottomCenter } from "react-icons/hi2";
import { HiNewspaper } from "react-icons/hi2";
import { BsFillCameraFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import  Product  from "./Product.json";


export default function Information() {
    return (
        <>
            <section className='tipa-sidebar container'>
                <div className="box-1">
                    <div className="profile">
                        <div className="title">
                            <img src={Svg} alt="" />
                            <div className='return'></div>
                        </div>
                        <div className="total">
                            <h3 className='username'>Dilfuza Qodirova</h3>
                            <span className='email'>@username</span>
                        </div>
                    </div>
                    <div className="lists">
                        <li className='for-work'><a href="#" className='setting-item'><FiUserCheck className='profile-icon'/>Subscribed</a></li>
                        <li className='for-work'><a href="#" className='setting-item'><HiOutlineChatBubbleBottomCenter className='profile-icon'/>Chat</a></li>
                        <li className='for-work'><a href="#" className='setting-item'><HiNewspaper className='profile-icon'/>News</a></li>
                        <li className='for-work'><a href="#" className='setting-item'><BsFillCameraFill className='profile-icon'/>Sale</a></li>
                        <li className='for-work'><a href="#" className='setting-item'><FiSettings className='profile-icon'/>Settings</a></li>
                    </div>
                </div>
                <div className="box-2">

                </div>
            </section>
        </>
    )
}
