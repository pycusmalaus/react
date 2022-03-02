import React from 'react'
// import './style.css'
import newStyle from './new.module.css'

function Header(){
    return(
        <div> 
            <h1>Hello Guys</h1>
            <div className="header">
                <ul>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                </ul>
            </div>
            <div className="banner">
                <h4 className={newStyle.main}>This is my Banner section</h4>
            </div>
            <div className="about-us">
                <h2>Do you know</h2>
            </div>
            <div className="fotter">
                <p>This is fotter section</p>
            </div>
        </div>
    )
}

export default Header