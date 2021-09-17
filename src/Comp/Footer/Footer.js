import React from 'react';
import '../Footer/footer.css';
const Footer = () => {
    return (
        <div className='footer-div-main' >
             <div className='text-div'>
                 <h2 id='footer-h2'>Download the app now.</h2>
                 <h4 id='footer-h4'>Available on your favorite store. Start your premium experience now</h4>
             </div>
             <div className='buton-div'>
                 <button id='btn1'>Playstore</button>
                 <button id='btn2' >App store</button>
             </div>
        </div>
    )
}

export default Footer;
