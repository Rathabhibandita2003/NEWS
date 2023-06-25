import React from "react"; 
import './Header.css'
const Header = () => {
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <img src="./logo.jpg" alt="logo" width={100}/>
        
        <div className=" flexCenter h-menu">
          <a href="">Documents</a>
          <a href="">Biography</a>
          <a href="">Head lines</a>
          <a href="">Contact us</a>
         <button className="button"><a href="">Contact</a></button> 
        </div>
        </div>

      </section>
  )
}

export default Header