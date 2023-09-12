import React from 'react'

function DefaultLayout(props) {
  return (
    <div className='header box-shadow1'>
            <div className="d-flex justify-content-between">
                <h1>Tikka Rentals</h1>
              
            </div>
            <div className="content">
                    {props.children}
            </div>

    </div>
  )
}

export default DefaultLayout