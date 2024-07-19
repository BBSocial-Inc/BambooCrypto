import React from 'react'
import './reserve.scss'
import { Link } from 'react-router-dom'

const Reserve = () => {
  return (
    <section className="reservemain">
        <h1 className="reservehead">Don't Miss Out! Stay 
        Updated on the Launch.</h1>
        <p className="reservepara">The social network for crypto enthusiast, crypto conversations, web3 education and crypto transactions.</p>
        <Link to='/reserveyourusername' className="reservebtn">Reserve your username</Link>
    </section>
  )
}

export default Reserve
