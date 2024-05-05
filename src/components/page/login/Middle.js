import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Middle({ICON}) {
    return (
        <div id="comp_Middle" className='body'>
            <div id="icon"><img alt="Icon trường THPT Huỳnh Văn NGhệ" src={ICON}></img></div>
            <p>Welcome to the website of Huynh Van Nghe High School.<br></br><br></br> <strong>It is a pleasure to meet you! <FontAwesomeIcon style={{color: "rgb(252 119 172)"}} icon={faHeart} /></strong></p>
            <div id="buttons">
                <Link className='btn' id="signin" to="signin">Login</Link>
                <Link className='btn' id="signup" to="signup">Create an accout</Link>
            </div>
        </div>
    )
}

export default Middle;