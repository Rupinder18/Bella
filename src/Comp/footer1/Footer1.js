import React from 'react';
import '../footer1/footer1.css';
import log from '../../assests/logo.png';
const Footer1 = () => {
    return (
        <div id='F1' className='footer-last-div'>
            <div className='footer-last-logo'>
                <img src={log}/>
            </div>
            <div className='footer-last-links'>
                <a href='https://twitter.com/?lang=en' target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href='https://www.facebook.com/' target="_blank"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                <a href='https://www.instagram.com/' target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i>
</a>
            </div>
            <div className='footer-last-text'>
                <label>Copyright 2020 Bella Onojie.com</label>
            </div>
           
        </div>
    )
}

export default Footer1;
