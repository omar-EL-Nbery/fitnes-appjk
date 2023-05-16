import Carousel from 'react-bootstrap/Carousel';

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 about-image "
                    src="https://scontent.fcai21-4.fna.fbcdn.net/v/t1.6435-9/39940241_758585271153732_1492993226942971904_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dBW_aN6I9A0AX_CER4P&_nc_ht=scontent.fcai21-4.fna&oh=00_AfDS8tGY70QrfdPpxW9mfPW8oHtwwRjo3QjpIv1Ek1XF1g&oe=648640C5"
                    alt="First slide"
                />

                <Carousel.Caption>
                    <h3>CONTINUE YOUR HEALTH & FITNESS JOURNEY
                        Move with confidence from bump through to birth and beyond with pregnancy and postnatal programs.</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 about-image "
                    src="https://scontent.fcai21-3.fna.fbcdn.net/v/t1.6435-9/38786263_744640092548250_4236095354640007168_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=QR7PeVUU0TUAX9_UqoP&_nc_ht=scontent.fcai21-3.fna&oh=00_AfDwjodeCPtXWBGjMA9zMK7UWC4oQqzfnM6Ybpoq0wmIwA&oe=64864540"
                    alt="Second slide"
                />

                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-fluid h-100 w-100" style={{ objectFit: 'cover' }}
                    src="https://scontent.fcai21-3.fna.fbcdn.net/v/t1.6435-9/44855411_794203484258577_5481963078268485632_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Z23MSUtNxpQAX9qSLBm&_nc_ht=scontent.fcai21-3.fna&oh=00_AfBF4mgs1Eji0HZNGUpCQDT8ZFNWSAihEuj0iZYTlqw3nw&oe=648656F1"
                    alt="Third slide"
                />

                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;