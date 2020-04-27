import React from 'react'
import './css/properties.css'
import background from '../images/background.jpg'
import search from '../icons/search.svg'

import property from '../images/property.jpg'

import {
  Link
} from 'react-router-dom'

function PropertiesOwned() {
    return (
        <div className="properties">
            <div 
                className="background"
                style={{backgroundImage: `url(${background})`, backgroundSize:`cover`}}
            ></div>

            <div className="content">    
                <div className="one">
                    <div className="head">Properties Owned by Terver Titus</div>
                    <div className="subhead">A list of all the properties owned by Terver Titus</div>
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
                            <div className="title">Terver Titus owns 3 Bedroom Apartment, Lekki Phase 1</div>
                            <div className="data">
                                <div className="tabs">
                                    <span className="value">
                                        5
                                    </span>
                                    <span className="label">
                                        units owned
                                    </span>
                                </div>

                                <div className="tabs">
                                    <span className="value">
                                        ₦25,000
                                    </span>
                                    <span className="label">
                                        worth of property owned
                                    </span>
                                </div>
                            </div>
                            <Link to="/properties/details/">
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
                            <div className="title">Terver Titus owns 3 Bedroom Apartment, Lekki Phase 1</div>
                            <div className="data">
                                <div className="tabs">
                                    <span className="value">
                                        5
                                    </span>
                                    <span className="label">
                                        units owned
                                    </span>
                                </div>

                                <div className="tabs">
                                    <span className="value">
                                        ₦25,000
                                    </span>
                                    <span className="label">
                                        worth of property owned
                                    </span>
                                </div>
                            </div>
                            <Link to="/properties/details/">
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

export default PropertiesOwned
