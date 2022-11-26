import React from 'react'
import '../Styles/footer.scss'

const Footer = () => {
  return (
    <footer>
        <div>
            <h1>TechStar</h1>
            <p>@all right reserved</p>
        </div>
        <div>
            <h5>Follow Us</h5>
            <div>
                <a href = "https://youtube.com" target= {"blank"}>Youtube</a>
                <a href = "https://github.com" target= {"blank"}>Github</a>
                <a href = "https://instagram.com" target= {"blank"}>Instagram</a>
                <a href = "https://linkedin.com" target= {"blank"}>LinkedIn</a>

            </div>
        </div>
    </footer>
  )
}

export default Footer;