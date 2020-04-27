import React from 'react'
import './css/list-of-properties.css'
import background from '../images/background.jpg'
import propertyThree from '../images/property-three.jpg'

import {
  Link
} from 'react-router-dom'

function PropertiesBoughtAdmin() {
    return (
        <div className="list-of-properties">
            <div 
                className="background"
                style={{backgroundImage: `url(${background})`, backgroundSize:`cover`}}
            ></div>

            <div className="content">    
                <div className="one">
                    <div className="head">Modify Property</div>
                    <div className="subhead">Make the necessary changes to this property</div>
                </div>



                <div className="two">
                    <div className="tab">
                        <div className="label">You cannot modify this property's name</div>
                        <input type="text" className="disabled" disabled />
                    </div>

                    <div className="tab input-group">
                        <div className="input-group-container-left">
                            <div className="label">Change picture</div>
                            <input className="upload-picture" accept="image/x-png,image/gif,image/jpeg" type="file" />
                        </div>
                        <div className="input-group-container-right">
                            <div class="image" style={{backgroundImage: `url(${propertyThree})`, backgroundSize:`cover`}}></div>
                        </div>
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
                        <div className="label">You cannot modify this property's location</div>
                        <input type="text" className="disabled" disabled />
                    </div>
                    
                    <div className="tab">
                        <div className="label">You cannot modify start date</div>
                        <input type="date" className="disabled" disabled />
                    </div>
                    
                    <div className="tab">
                        <div className="label">You cannot modify maturity date</div>
                        <input type="date" className="disabled" disabled />
                    </div>
                    
                    <div className="tab">
                        <div className="label">You cannot modify investemnt type</div>
                        <input type="text" className="disabled" disabled />
                    </div>
                    
                    <div className="tab">
                        <div className="label">You cannot modify unit type</div>
                        <input type="text" className="disabled" disabled />
                    </div>
                    
                    <div className="tab">
                        <div className="label">You cannot modify expected returns</div>
                        <input type="text" className="disabled" disabled />
                    </div>
                    
                    <div className="tab">
                        <div className="label">You cannot modify insurance partner</div>
                        <input type="text" className="disabled" disabled />
                    </div>
                    
                    <div className="tab">
                        <div className="label">About Property</div>
                        <textarea rows="7" type="text"></textarea>
                    </div>
                    
                    <div className="tab">
                        <div className="save-property button">SAVE CHANGES</div>
                        <Link to="/properties">
                        <button className="button add-property">ADD NEW PROPERTY</button>
                        </Link>
                        <button className="button hide-property">HIDE PROPERTY</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default PropertiesBoughtAdmin
