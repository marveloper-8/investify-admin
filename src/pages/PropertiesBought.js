import React from 'react'
import './css/properties.css'
import background from '../images/background.jpg'
import search from '../icons/search.svg'

import {
  Link
} from 'react-router-dom'

import property from '../images/property.jpg'

function PropertiesBought() {
    return (
        <div className="properties">
            <div 
                className="background"
                style={{backgroundImage: `url(${background})`, backgroundSize:`cover`}}
            ></div>

            <div className="content">    
                <div className="one">
                    <div className="head">Properties Bought by Terver Titus</div>
                    <div className="subhead">A list of all the properties bought by Terver Titus</div>
                </div>

                <div className="two">

                    <div className="search">
                        <div className="icon-container"><img src={search} className="icons" alt="search" /></div>
                        <div className="search-container"><input type="search" placeholder="Search users by name or email..." /></div>
                    </div>

                    <div className="items">
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
                            <div className="date-bought date">
                                <span className="label">
                                    Property was bought on
                                </span>
                                <br />
                                <span className="container">
                                    13 March, 2020
                                </span>
                            </div>
                            <button className="download-receipt">
                                DOWNLOAD RECEIPT
                            </button>
                            <Link to="/properties/details">
                            <button className="view-property">
                                VIEW PROPERTY
                            </button>
                            </Link>
                        </div>
                    </div>
                
                    <div className="items">
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
                            <div className="date-bought date">
                                <span className="label">
                                    Property was bought on
                                </span>
                                <br />
                                <span className="container">
                                    13 March, 2020
                                </span>
                            </div>
                            <button className="download-receipt">
                                DOWNLOAD RECEIPT
                            </button>
                            <Link to="/properties/details">
                            <button className="view-property">
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

export default PropertiesBought
