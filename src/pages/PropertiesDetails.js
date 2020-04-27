import React from 'react'
import './css/properties-details.css'
import propertyTwo from '../images/property-two.jpg'
import propertyThree from '../images/property-three.jpg'

import {
  Link
} from 'react-router-dom'

function PropertiesDetails() {
    return (
        <div className="properties-details">
            <div className="image" style={{backgroundImage: `url(${propertyTwo})`, backgroundSize:`cover`}}></div>

            <div className="content">
                <div className="one">
                    <div className="name">2 Bedroom Duplex</div>
                    <div className="price">
                        <span className="value">₦7,000 </span>
                        <span className="label">per unit</span>
                    </div>
                </div>

                <div className="two">
                    <div className="property-available">
                        Number of this property available
                        <div className="value-container">
                            <span className="value-available">56</span> units
                        </div>
                    </div>
                </div>

                <div className="three">
                    <div className="title">
                        Investment's Information
                    </div>
                    
                    <div className="three-content">
                        <div className="column left">    
                            <div class="tabs">
                                <span className="label">
                                    Units Available
                                </span>
                                <span className="text">
                                    16
                                </span>
                            </div>
                            <div class="tabs">
                                <span className="label">
                                    Expected Returns
                                </span>
                                <span className="text">
                                    12% in 6 months
                                </span>
                            </div>
                            <div class="tabs">
                                <span className="label">
                                    Current Value/Unit
                                </span>
                                <span className="text">
                                    ₦7,000 per units
                                </span>
                            </div> 
                            <div class="tabs">
                                <span className="label">
                                    Maturity date
                                </span>
                                <span className="text">
                                    15th of October 2020
                                </span>
                            </div>
                            <div class="tabs">
                                <span className="label">
                                    Unit Type
                                </span>
                                <span className="text">
                                    Units can be sold to others anytime
                                </span>
                            </div>
                        </div>
                        
                        <div className="column right">    
                            <div class="tabs">
                                <span className="label">
                                    Investment Type
                                </span>
                                <span className="text">
                                    Fixed Income
                                </span>
                            </div>
                            <div class="tabs">
                                <span className="label">
                                    Start Date
                                </span>
                                <span className="text">
                                    15th of April 2020
                                </span>
                            </div>
                            <div class="tabs">
                                <span className="label">
                                    Payout Type
                                </span>
                                <span className="text">
                                    Capital + profit is paid at maturity date
                                </span>
                            </div>
                            <div class="tabs">
                                <span className="label">
                                    Insurance Partner
                                </span>
                                <span className="text">
                                    Leadway Insurance
                                </span>
                            </div>
                            <div class="tabs">
                                <span className="label">
                                    Property Location
                                </span>
                                <span className="text">
                                    Lekki Phase 1, Lagos, Nigeria
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="four">
                    <div className="title">About Investment</div>

                    <div className="container">
                        <div class="image" style={{backgroundImage: `url(${propertyThree})`, backgroundSize:`cover`}}></div>

                        <div class="text">
                            <p>
                                Tellus id interdum velit laoreet id donec ultrices. Ultrices gravida dictum fusce ut placerat orci. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Porttitor rhoncus dolor purus non enim praesent elementum. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et.
                            </p>
                        </div>
                    </div>
                </div>
           
                <Link to="/properties/modify">
                    <button className="button edit-property">EDIT PROPERTY</button>
                </Link>
                <Link to="/properties">
                    <button className="button add-property">ADD NEW PROPERTY</button>
                </Link>
                <button className="button delete-property">HIDE PROPERTY</button>
            </div>
        </div>
    )
}

export default PropertiesDetails
