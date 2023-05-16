import React from 'react'
import Button from 'react-bootstrap/Button';

export const HeroBtn = (props) => {
    return (
        <div>
            <Button className='hero-btn' variant="" size="lg" active>
                {props.text}
            </Button>{' '}
        </div>
    )
}
