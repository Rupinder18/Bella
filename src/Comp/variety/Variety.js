import React from 'react';
import '../variety/variety.css';
import mob4 from '../../assests/mob4.png';
const Variety = () => {
    return (
        <div className='variety-main-div'>
            <div className='variety-content'>
                <h3 id='variety-h3' >Explore varieties</h3>
                <h2 id='variety-h2' >Shop for your favorites
meal as e dey hot.</h2>
                <h4 id='variety-h4' >Shop for your favorite meals or drinks<br/>
and enjoy while doing it.</h4>
            </div>
            <div className='variety-logo'>
                <img className='var-img' src={mob4}/>
            </div>
        </div>
    )
}

export default Variety;
