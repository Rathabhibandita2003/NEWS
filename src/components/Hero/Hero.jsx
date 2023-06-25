import React from 'react'
import "./Hero.css"
function Hero() {
  return (
    <section className="hero-wrapper">
        <div className="padding innerWidth  flexCenter hero-container ">
           {/*Left side */}
           <div className="flexColStart hero-left">
             <div className="hero-title">
              <div className="orange-circle"></div>
                <h3>
                   THE MIRROR <br />
                   OF BALASORE
                   </h3>
             </div>
             <div className='flexColStart hero-des'>
              <span>First electronic media show of Balasore.</span> 
                <span>Started on 22nd January ,2000.</span>
                
                <span>
                   It servers as a darpan , means the mirror of Balasore.</span>
                   <span>Boardcasting the regional news of the district.
                </span>
             </div>
              <div className="flexCenter search-bar">
                <input type="text" placeholder="Enter the date"/>
               <button className="button">SEARCH</button>
              </div>
           </div>
           {/*right side*/}
           <div className="flexCenter hero-right">
            <div className="image-container">
                <img src='./hero-image.jpg' alt=''/>
            </div>
           </div>
        </div>

    </section>
  )
}

export default Hero