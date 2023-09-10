import React from 'react'

function DefaultLayout(props) {
  return (
    <div className='header'>
            <div className="d-flex justify-content-between">
                <h2>Tikka Rentals</h2>
                <button>Users</button>
            </div>
            <div className="content">
                    {props.children}
            </div>

    </div>
  )
}

export default DefaultLayout