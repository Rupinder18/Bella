import React from 'react';
import '../Head/Head.css';
import Logo from '../../assests/logo.png';
import Mobile1 from '../../assests/mobile1.png';
import Mobile2 from '../../assests/mobile2.png';
import Appworks from '../appworks/Appworks';
import mob1 from '../../assests/mob3.png';
import mob5 from '../../assests/mob5.png';
import Variety from '../variety/Variety';
import Footer from '../Footer/Footer';
import Footer1 from '../footer1/Footer1';
let open = false;
const change =()=>{
    const ham = document.getElementById("Hamburger");
    const links =document.getElementById("Right");
    console.log(links)
    if(!open){
        ham.classList.add('open');
        links.classList.add("links");
    }
    else{
        ham.classList.remove('open');
        links.classList.remove("links");
    }
    open =!open
}


const Head = () => {
    return (
        <div className='desktop-header-7'>  
          <div className='desktop-navbar'>
                <div className='left'>
                  <a href="#">  <img className='bella' src={Logo}/></a>   
                </div>
                <div id='Hamburger' className='hamburger'onClick={change} >
                    <div></div>
                </div>
                <div  className='right'>
                    <div id="Right" className='desktop-menu'>
                        <a id="home" className='nav-link' href="#">Home</a>
                        <a className='nav-link' href="#" >Product</a>
                        <a className='nav-link' href="#" >Faq</a>
                        <a className='nav-link' href='#' >Contact</a>
                    </div>
                </div>
                
            </div>
          
            <div className='desktop-hero' >
                <h1 className='food'>Food app</h1>
                <h1 id='why' className='whythey'>Why stay hungry when </h1>
                <h1 id="not-shown" className='whythey'>Why stay hungry when you can order form Bella Onojie</h1>
                <h1  className='whythey'>you can order form Bella Onojie</h1>
               <h4 className='download'>Download the bella onoje’s food app now on</h4>         
                <div className='big-button'>
                    <button id='tingu1' className='master-button' >Playstore</button>
                    <button id="tingu" className='master-button' >App store</button>
                </div>
            </div>
             <div className='Group53' > 
            <div id='mobile2'>
            <img  src={Mobile2}/>
            </div>
            <div id='mobile1'>
            <img  src={Mobile1}/>
            </div>
             </div>
             <div className='hr'></div>
             <Appworks
             title="How the app works"
             pic={mob1}
             h3="Create an account"
             h2='Create/login to an existing 
             account to get started'
             h4='An account is created with your email
             and a desired password'
             />
             <Variety/>
             <Appworks 
              pic={mob5}
              h3="Checkout"
              h2='When you done check out
              and get it delivered.'
              h4='When you done check out and get it 
              delivered with ease.'
             />
             <Footer/>
             <Footer1/>
        </div>
    )
}

export default Head;
