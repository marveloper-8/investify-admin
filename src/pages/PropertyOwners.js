import React, { Component } from 'react'
import './css/property-owners.css'

class PropertyOwners extends Component {
    state = {
      opened: false
    }

    render() {

        const {
          props: {
            name
          },
          state: {
            opened
          }
        } = this

        return (
            <div
              {...{
                className: `accordion-item, ${opened && 'accordion-item--opened'}`,
                onClick: () => { this.setState({ opened: !opened }) }
              }}
            >
              <div {...{ className: 'accordion-item__line' }}>
                <div {...{ className: 'accordion-item__title' }}>
                  Owners
                </div>
                <span {...{ className: 'accordion-item__icon' }}/>
              </div>
              <div {...{ className: 'accordion-item__inner' }}>
                <div {...{ className: 'accordion-item__content' }}>
                  <div {...{ className: 'accordion-item__paragraph' }}>
                    {name} 
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default PropertyOwners