import React from 'react'
import "../Styles/home.scss";
import vg from "../Assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram, AiFillLinkedin
  } from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className='home' id = "home">
        <main>
            <h1>TechStar</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>
    < div className='home2'>
        <img src = {vg} alt = "Graphics" /> 
        <div>
        <p>
            We are your one and only solution to the tech problems you face every day. we are leading tech company whose aim is to increase the problem solving ability in children.
        </p>
         </div> 
    </div>

    <div className='about' id = "about">
       <div>
       <h1>Who are you?</h1>
        <p>
        Web development services help create all types of web-based software and ensure great experience for web users. At ScienceSoft, we professionally design, redesign and continuously support customer-facing and enterprise web apps to achieve high conversion and adoption rates.
        Development is a process that creates growth, progress, positive change or the addition of physical, economic, environmental, social and demographic components.  The purpose of development is a rise in the level and quality of life of the population, and the creation or expansion of local regional income and employment opportunities, without damaging the resources of the environment.  Development is visible and useful, not necessarily immediately, and includes an aspect of quality change and the creation of conditions for a continuation of that change.
        </p>
       </div>

    </div>

    <div className='brands' id = "brands">
         <div>
            <h1>Brands</h1>

            <article>
                <div style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>
                <div style={{animationDelay:"0.5s"}}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay:"0.7s"}}>
                    <AiFillYoutube />
                    <p>Youtube</p>
                </div>
                <div style={{animationDelay:"1s"}}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
                <div style={{animationDelay:"1s"}}>
                    <AiFillLinkedin />
                    <p>
                        LinkedIn 
                    </p>
                </div>
            </article>
         </div>

    </div>
    
    
    </>
  )
}

export default Home