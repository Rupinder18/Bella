import React from 'react';
import "../appworks/Appwork.css";
const Appworks = ({title,pic,h3,h2,h4}) => {
    return (
        <div className="desktop-hero-5">
            <div className='header3' >
            <h3 id='title' >{title}</h3>
            <div className='desktop-5-flex'>
                <div className='desktop-5-img-div'>
                    <img src={pic}/>
                </div>
                <div className='desktop-5-content' >
                    <h3 id='create-h3'>{h3}</h3>
                    <h2 id='create-h2' >{h2} </h2>
                    <h4 id='create-h4'>{h4}</h4>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Appworks;
