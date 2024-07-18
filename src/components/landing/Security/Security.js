import React from 'react'
import './security.scss'

const Security = () => {
  return (
    <section className="mainsecurity">
        <h1 className="securityhead">Security is <br />
        Our Priority</h1>
        <div className="securitycards">
            <div className="innercard">
                <h4 className="innercardhead">Secure wallet integration</h4>
            </div>
            <div className="innercard">
                <h4 className="innercardhead">Robust user 
                authentication</h4>
            </div>
            <div className="innercard">
                <h4 className="innercardhead">Commitment 
                to user privacy</h4>
            </div>
        </div>
    </section>
  )
}

export default Security
