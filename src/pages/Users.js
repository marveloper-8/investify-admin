import React from 'react'
import './css/users.css'
import search from '../icons/search.svg'
import background from '../images/background.jpg'

import {
  Link
} from 'react-router-dom'

import avatar from '../images/avatar.webp'

function UsersByAdmin() {
    return (
        <div className="users">
            <div 
                className="background"
                style={{backgroundImage: `url(${background})`, backgroundSize:`cover`}}
            ></div>

            <div className="content">    
                <div className="one">
                    <div className="head">Users</div>
                    <div className="subhead">A list of everyone registered on Investify.africa</div>
                </div>

                <div className="two">
                    <div className="search">
                        <div className="icon-container"><img src={search} className="icons" alt="account" /></div>
                        <div className="search-container"><input type="search" placeholder="Search users by name or email..." /></div>
                    </div>

                    <Link
                        className="link"
                        to="/user-details"
                    >
                    <div className="tab">
                        <div className="avatar">
                            <div style={{backgroundImage: `url(${avatar})`, backgroundSize:`cover`}} className="container"></div>
                        </div>

                        <div className="text">
                            <div className="name">Terver Titus</div>
                            <div className="email">terver@gmail.com</div>
                            <span className="tag">VIEW PROFILE</span>
                        </div>
                    </div>
                    </Link>
                    
                    <div className="tab">
                        <div className="avatar">
                            <div style={{backgroundImage: `url(${avatar})`, backgroundSize:`cover`}} className="container"></div>
                        </div>

                        <div className="text">
                            <div className="name">Terver Titus</div>
                            <div className="email">terver@gmail.com</div>
                            <span className="tag">VIEW PROFILE</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default UsersByAdmin
