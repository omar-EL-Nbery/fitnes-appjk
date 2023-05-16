import React from 'react'
import { Container, } from 'react-bootstrap'
import { HeroBtn } from './HeroBtn';

export const About = () => {
    return (
        <Container className='custome-container d-flex pt-2'>
            <div className='row d-flex  justify-content-center align-items-center'>
                <div className='text col-md-6'>
                    <h1 className='h3'>About</h1>
                    <h1 className='custome-h1'>Hassan Ahmed</h1>
                    <p className='custome-para'>
                        I'm Kayla Itsines, Sweat's co-founder and Head Trainer. I've been helping women around the world feel confident and strong since 2008,
                        and my programs can help you achieve your goals and take control of your fitness in a way that fits into your lifestyle.
                        y mission is to help support women in their health and fitness journey so they can become the BEST version of themselves,
                        and my programs can help you feel confident and strong whether you're a beginner or more advanced.
                        Start training with me and the Sweat with Kayla Community today!
                    </p>
                    <HeroBtn text="Keep Reading" />
                </div>
                <div className='col-6'>
                    <img className='about-image' src="//cdn.shopify.com/s/files/1/0662/0785/t/33/assets/kayla_phone_2023.png?v=110616137863748884311677548772" alt="" />

                </div>
            </div>

        </Container>
    )
}
