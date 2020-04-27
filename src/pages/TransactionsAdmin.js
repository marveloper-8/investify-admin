import React from 'react'
import './css/transactions.css'
import background from '../images/background.jpg'
import search from '../icons/search.svg'

import {
  Link
} from 'react-router-dom'

import property from '../images/property.jpg'

function TransactionsAdmin() {
    return (
        <div className="transactions">
            <div 
                className="background"
                style={{backgroundImage: `url(${background})`, backgroundSize:`cover`}}
            ></div>

            <div className="content">    
                <div className="one">
                    <div className="head">Transactions</div>
                    <div className="subhead">A list of all your transactions: properties bought, properties sold, properties yet to be bought and properties yet to be sold. You can approve requests here.</div>
                </div>

                <div className="two">
                    <div className="search">
                        <div className="icon-container"><img src={search} className="icons" alt="account" /></div>
                        <div className="search-container"><input type="search" placeholder="Search investments..." /></div>
                    </div>
                   
                    <div className="items to-sell-item">
                        <div style={{backgroundImage: `url(${property})`, backgroundSize:`cover`}} className="img">
                        </div>

                        <div className="text">
                            <div className="title">
                                <b>Terver Titus</b> wants to sell <b>3 Bedroom Apartment, Lekki Phase 1</b>
                            </div>
                            <div className="data">
                                <div className="tabs">
                                    <span className="value">
                                        5
                                    </span>
                                    <span className="label">
                                        units to be sold
                                    </span>
                                </div>

                                <div className="tabs">
                                    <span className="value">
                                        ₦25,000
                                    </span>
                                    <span className="label">
                                        worth of property to be sold
                                    </span>
                                </div>
                            </div>
                            <div className="status">
                                <span className="container sell">
                                    Pending
                                </span>
                            </div>
                            <div className="action">
                                <button className="accept">ACCEPT</button>
                                <button className="decline">DECLINE</button>
                            </div>
                            <Link to="/user-details">
                                <button className="buttons user-profile">
                                    USER'S PROFILE
                                </button>
                            </Link>
                            <Link to="properties/details">
                                <button className="buttons view-property">
                                    VIEW PROPERTY
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="items to-buy-item">
                        <div style={{backgroundImage: `url(${property})`, backgroundSize:`cover`}} className="img">
                        </div>

                        <div className="text">
                            <div className="title">
                                <b>Terver Titus</b> wants to buy <b>3 Bedroom Apartment, Lekki Phase 1</b>
                            </div>
                            <div className="data">
                                <div className="tabs">
                                    <span className="value">
                                        5
                                    </span>
                                    <span className="label">
                                        units to be bought
                                    </span>
                                </div>

                                <div className="tabs">
                                    <span className="value">
                                        ₦25,000
                                    </span>
                                    <span className="label">
                                        worth of property to be bought
                                    </span>
                                </div>
                            </div>
                            <div className="status">
                                <span className="container buy">
                                    Pending
                                </span>
                            </div>
                            <div className="action">
                                <button className="accept">ACCEPT</button>
                                <button className="decline">DECLINE</button>
                            </div>
                            <Link to="/user-details">
                                <button className="buttons user-profile">
                                    USER'S PROFILE
                                </button>
                            </Link>
                            <Link to="properties/details">
                                <button className="buttons view-property">
                                    VIEW PROPERTY
                                </button>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="items bought-item">
                        <div style={{backgroundImage: `url(${property})`, backgroundSize:`cover`}} className="img">
                        </div>

                        <div className="text">
                            <div className="title">
                                <b>Terver Titus</b> bought <b>3 Bedroom Apartment, Lekki Phase 1</b>
                            </div>
                            <div className="data">
                                <div className="tabs">
                                    <span className="value">
                                        5
                                    </span>
                                    <span className="label">
                                        units bought
                                    </span>
                                </div>

                                <div className="tabs">
                                    <span className="value">
                                        ₦25,000
                                    </span>
                                    <span className="label">
                                        worth of property bought
                                    </span>
                                </div>
                            </div>
                            <div className="date">
                                <span className="label">
                                    Property was bought on
                                </span>
                                <span className="container">
                                    13 March, 2020
                                </span>
                            </div>
                            <button className="buttons download-receipt">
                                DOWNLOAD RECEIPT
                            </button>
                            <Link to="/user-details">
                                <button className="buttons user-profile">
                                    USER'S PROFILE
                                </button>
                            </Link>
                            <Link to="properties/details">
                                <button className="buttons view-property">
                                    VIEW PROPERTY
                                </button>
                            </Link>
                        </div>
                    </div>
                
                    <div className="items sold-item">
                        <div style={{backgroundImage: `url(${property})`, backgroundSize:`cover`}} className="img">
                        </div>

                        <div className="text">
                            <div className="title">
                                <b>Terver Titus</b> sold <b>3 Bedroom Apartment, Lekki Phase 1</b>
                            </div>
                            <div className="data">
                                <div className="tabs">
                                    <span className="value">
                                        5
                                    </span>
                                    <span className="label">
                                        units sold
                                    </span>
                                </div>

                                <div className="tabs">
                                    <span className="value">
                                        ₦25,000
                                    </span>
                                    <span className="label">
                                        worth of property sold
                                    </span>
                                </div>
                            </div>
                            <div className="date">
                                <span className="label">
                                    Property was sold on
                                </span>
                                <span className="container">
                                    13 March, 2020
                                </span>
                            </div>
                            <button className="buttons download-receipt">
                                DOWNLOAD RECEIPT
                            </button>
                            <Link to="/user-details">
                                <button className="buttons user-profile">
                                    USER'S PROFILE
                                </button>
                            </Link>
                            <Link to="properties/details">
                                <button className="buttons view-property">
                                    VIEW PROPERTY
                                </button>
                            </Link>
                        </div>
                    </div>
                
                </div>
            </div>


        </div>
    )
}

export default TransactionsAdmin
