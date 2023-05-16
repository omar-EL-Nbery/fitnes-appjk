import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import movieData from './MoviesData';

const CardCarousel = () => {






    return (


        <Carousel className="movie-cards-container " >
            {movieData.map((movie) => (
                <Carousel.Item key={movie.id}>
                    <Card className="movie-card">
                        <Card.Img className="movie-card-image" variant="top" src={movie.image} />
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>{movie.description}</Card.Text>
                            <Button variant="primary">Watch Now</Button>
                        </Card.Body>
                    </Card>


                </Carousel.Item>
            ))}
        </Carousel>

    );
};

export default CardCarousel;