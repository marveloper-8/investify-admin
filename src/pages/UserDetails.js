import React from 'react'
import './css/user-details.css'
import account from '../icons/account.svg'
import arrowRight from '../icons/arrow-right.svg'

import {
  Link
} from 'react-router-dom'

import avatar from '../images/avatar.webp'

function UserDetails() {
    return (
        <div className="user-details">

            <div className="one">
                <div className="avatar">
                    <div style={{backgroundImage: `url(${avatar})`, backgroundSize:`cover`}} className="container"></div>
                </div>
                <div className="name">Terver Titus</div>
                <div className="email">terver@email.com</div>
                <div className="phone">08050990111</div>
            </div>

            <div className="two">
                <div className="tab">
                    <div className="icon-container">
                        <img src={account} className="icon" alt="location" />
                    </div>
                    <div className="text">
                        <div className="head">Current Net Worth</div>
                        <div className="content">₦ 0</div>
                    </div>
                </div>
                
                <div className="tab">
                    <div className="icon-container">
                        <img src={account} className="icon" alt="location" />
                    </div>
                    <div className="text">
                        <div className="head">Total Property Owned</div>
                        <div className="content">0</div>
                    </div>
                </div>
                
                <div className="tab">
                    <div className="icon-container">
                        <img src={account} className="icon" alt="location" />
                    </div>
                    <div className="text">
                        <div className="head">Total Property Bought</div>
                        <div className="content">0</div>
                    </div>
                </div>
                
                <div className="tab">
                    <div className="icon-container">
                        <img src={account} className="icon" alt="location" />
                    </div>
                    <div className="text">
                        <div className="head">Total Property Sold</div>
                        <div className="content">0</div>
                    </div>
                </div>
                
                <div className="tab">
                    <div className="icon-container">
                        <img src={account} className="icon" alt="location" />
                    </div>
                    <div className="text">
                        <div className="head">Total Profit Made</div>
                        <div className="content">₦ 0</div>
                    </div>
                </div>
                
                <div className="tab">
                    <div className="icon-container">
                        <img src={account} className="icon" alt="location" />
                    </div>
                    <div className="text">
                        <div className="head">Total Amount Spent</div>
                        <div className="content">₦ 0</div>
                    </div>
                </div>
                
                <div className="tab">
                    <div className="icon-container">
                        <img src={account} className="icon" alt="location" />
                    </div>
                    <div className="text">
                        <div className="head">Total Amount Earned</div>
                        <div className="content">₦ 0</div>
                    </div>
                </div>
            </div>

            <div className="three">
                <Link 
                    className="link" 
                    to="/transactions/owned"
                >
                <div className="tab">
                    <div className="tab-icon">
                        <img src={account} className="icons" alt="account" />
                    </div>

                    <div className="text">Properties owned by <b>Terver Titus</b></div>

                    <div className="arrow">
                        <img src={arrowRight} className="icons" alt="arrow" />
                    </div>
                </div>
                </Link>

                <Link 
                    className="link" 
                    to="/transactions/sold"
                >
                <div className="tab">
                    <div className="tab-icon">
                        <img src={account} className="icons" alt="account" />
                    </div>

                    <div className="text">Properties sold by <b>Terver Titus</b></div>

                    <div className="arrow">
                        <img src={arrowRight} className="icons" alt="arrow" />
                    </div>
                </div>
                </Link>

                <Link 
                    className="link" 
                    to="/transactions/bought"
                >
                <div className="tab">
                    <div className="tab-icon">
                        <img src={account} className="icons" alt="account" />
                    </div>

                    <div className="text">Properties bought by <b>Terver Titus</b></div>

                    <div className="arrow">
                        <img src={arrowRight} className="icons" alt="arrow" />
                    </div>
                </div>
                </Link>

                <Link 
                    className="link" 
                    to="/transactions/pending"
                >
                <div className="tab">
                    <div className="tab-icon">
                        <img src={account} className="icons" alt="account" />
                    </div>

                    <div className="text">Transaction in progress by <b>Terver Titus</b></div>

                    <div className="arrow">
                        <img src={arrowRight} className="icons" alt="arrow" />
                    </div>
                </div>
                </Link>
            </div>

            <div className="two">
                <div className="tab">
                    <div className="icon-container">
                        <img src={account} className="icon" alt="location" />
                    </div>
                    <div className="text">
                        <div className="head">Bank Account Name</div>
                        <div className="content">Terver Titus</div>
                    </div>
                </div>
                <div className="tab">
                    <div className="icon-container">
                        <img src={account} className="icon" alt="location" />
                    </div>
                    <div className="text">
                        <div className="head">Bank Account Number</div>
                        <div className="content">0011901919</div>
                    </div>
                </div>
                <div className="tab">
                    <div className="icon-container">
                        <img src={account} className="icon" alt="location" />
                    </div>
                    <div className="text">
                        <div className="head">Bank Name</div>
                        <div className="content">Guarantee Trust Bank</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails
