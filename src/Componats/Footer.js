import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container>
            <div className='row p-5'>
                <div className='col-3'>
                    <img src="//cdn.shopify.com/s/files/1/0662/0785/t/33/assets/sweat-app-pink.png?v=6
                    7462048408229302191607561587"
                        alt="" height={24} />

                    <p className="footer-para">Workout for men</p>
                </div>
                <div className='col-3'>
                    <p className='custome-para'>sweat App</p>
                    <p>Sign Up</p>
                    <p>Fourm</p>
                </div>
                <div className='col-3'>
                    <p className='custome-para'>Articals</p>
                    <p>Fittnes</p>
                    <p>Food</p>
                    <p>Health</p>
                    <p>Workout</p>
                    <p>Nutrion</p>
                </div>
                <div className='col-3'>
                    <p className='custome-para'>Support</p>
                    <p>Help Centre</p>
                    <p>Media Enquiries</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Do Not Sell My Information</p>
                </div>
            </div>

        </Container>
    )
}

export default Footer