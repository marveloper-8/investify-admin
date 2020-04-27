import React from 'react'

import './css/navigation.css'

import {
  Link
} from 'react-router-dom'

function NavigationMobile() {
    return (
        <div className="navigation-mobile">
            <div className="tabs">
                <Link className="links" to="/">
                    <span className="icons" role="img" aria-label="josh">📈</span>
                    <br /> <span className="text">Transactions</span>
                </Link>
            </div>
            <div className="tabs">
                <Link className="links" to="/users">
                    <span className="icons" role="img" aria-label="josh">👨🏽</span>
                    <br /> <span className="text">Users</span>
                </Link>
            </div>
            <div className="tabs">
                <Link className="links" to="/properties">
                    <span className="icons" role="img" aria-label="josh">💒</span>
                    <br /> <span className="text">Properties</span>
                </Link>
            </div>
        </div>
    )
}

export default NavigationMobile
