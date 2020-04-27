import React, {useState} from 'react'
import './css/list-of-properties.css'
// import PropertyOwners from './PropertyOwners'
import background from '../images/background.jpg'
import property from '../images/property.jpg'
import avatar from '../images/avatar.webp'
import search from '../icons/search.svg'

import {
  Link
} from 'react-router-dom'

function PropertiesBoughtAdmin() {
  
    const data = {
      "name" : [
          'Terver Titus',
          'Joshua Equere'
      ]
    }

    const [owners, setOwners] = useState(false)
    const [ownersTwo, setOwnersTwo] = useState(false)
    
    return (
        <div className="list-of-properties">
            <div 
                className="background"
                style={{backgroundImage: `url(${background})`, backgroundSize:`cover`}}
            ></div>

            <div className="content">    
                <div className="one">
                    <div className="head">Properties</div>
                    <div className="subhead">A list of all properties</div>
                </div>



                <div className="two">
                    <div className="title">
                        Upload a property
                    </div>

                    <div className="tab">
                        <div className="label">Name of Property</div>
                        <input type="text" />
                    </div>

                    <div className="tab">
                        <div className="label">Picture of Property</div>
                        <input className="upload-picture" accept="image/x-png,image/gif,image/jpeg" type="file" />
                    </div>
                    
                    <div className="tab input-group">
                        <div className="input-group-container-left">
                            <div className="label">Price per Unit</div>
                            <input type="number" />
                        </div>
                        <div className="input-group-container-right">
                            <div className="label">Number of Units</div>
                            <input type="number" />
                        </div>
                    </div>
                    
                    <div className="tab">
                        <div className="label">Property Location</div>
                        <input type="text" />
                    </div>
                    
                    <div className="tab">
                        <div className="label">Start Date</div>
                        <input type="date" />
                    </div>
                    
                    <div className="tab">
                        <div className="label">Maturity Date</div>
                        <input type="date" />
                    </div>
                    
                    <div className="tab">
                        <div className="label">Investment Type</div>
                        <input type="text" />
                    </div>
                    
                    <div className="tab">
                        <div className="label">Unit Type</div>
                        <input type="text" />
                    </div>
                    
                    <div className="tab">
                        <div className="label">Expected Returns</div>
                        <input type="text" />
                    </div>
                    
                    <div className="tab">
                        <div className="label">Insurance Partner</div>
                        <input type="text" />
                    </div>
                    
                    <div className="tab">
                        <div className="label">About Property</div>
                        <textarea rows="7" type="text"></textarea>
                    </div>
                    
                    <div className="tab">
                        <div className="button">UPLOAD PROPERTY</div>
                    </div>
                </div>
            


                <div className="three">
                    <div className="title">
                        List of Properties
                    </div>

                    <div className="search">
                        <div className="icon-container"><img src={search} className="icons" alt="search" /></div>
                        <div className="search-container"><input type="search" placeholder="Search users by name or email..." /></div>
                    </div>

                    <div className="items">
                        <div style={{backgroundImage: `url(${property})`, backgroundSize:`cover`}} className="img">
                        </div>

                        <div className="text">
                            <div className="title">3 Bedroom Apartment, Lekki Phase 1</div>
                            <div className="data">
                                <div className="tabs">
                                    <span className="value">
                                        26
                                    </span>
                                    <span className="label">
                                        units remaining
                                    </span>
                                </div>

                                <div className="tabs">
                                    <span className="value">
                                        ₦205,000
                                    </span>
                                    <span className="label">
                                        worth of property remaining
                                    </span>
                                </div>
                            </div>
                            <Link to="/properties/details">    
                            <button className="view-property">
                                VIEW PROPERTY
                            </button>
                            </Link>
                        </div>

                        <div className="owners">
                            <button className={owners ? "accordion-button-open" : "accordion-button"} onClick={() => setOwners(!owners)}>OWNERS</button>
                            <div className={owners ? "accordion-content-open" : "accordion-content"}>
                                {data.name.map((item, i) => {
                                    return (
                                    <div className="owner-lists" key={i}>
                                        <div className="avatar">
                                            <div style={{backgroundImage: `url(${avatar})`, backgroundSize:`cover`}} className="container"></div>
                                        </div>

                                        <div className="text">
                                            <div className="name">{item} <span className="property-owned">owns 5 properties</span></div>
                                            <Link to="/user-details">
                                            <button className="view-profile">VIEW PROFILE</button>
                                            </Link>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                

                    <div className="items">
                        <div style={{backgroundImage: `url(${property})`, backgroundSize:`cover`}} className="img">
                        </div>

                        <div className="text">
                            <div className="title">3 Bedroom Apartment, Lekki Phase 1</div>
                            <div className="data">
                                <div className="tabs">
                                    <span className="value">
                                        26
                                    </span>
                                    <span className="label">
                                        units remaining
                                    </span>
                                </div>

                                <div className="tabs">
                                    <span className="value">
                                        ₦205,000
                                    </span>
                                    <span className="label">
                                        worth of property remaining
                                    </span>
                                </div>
                            </div>
                            <Link to="/properties/details">    
                            <button className="view-property">
                                VIEW PROPERTY
                            </button>
                            </Link>
                        </div>

                        <div className="owners">
                            <button className={ownersTwo ? "accordion-button-open" : "accordion-button"} onClick={() => setOwnersTwo(!ownersTwo)}>OWNERS</button>
                            <div className={ownersTwo ? "accordion-content-open" : "accordion-content"}>
                                {data.name.map((item, i) => {
                                    return (
                                    <div className="owner-lists" key={i}>
                                        <div className="avatar">
                                            <div style={{backgroundImage: `url(${avatar})`, backgroundSize:`cover`}} className="container"></div>
                                        </div>

                                        <div className="text">
                                            <div className="name">{item} <span className="property-owned">owns 5 properties</span></div>
                                            <Link to="/user-details">
                                            <button className="view-profile">VIEW PROFILE</button>
                                            </Link>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                
                </div>
            
            </div>


        </div>
    )
}

export default PropertiesBoughtAdmin
