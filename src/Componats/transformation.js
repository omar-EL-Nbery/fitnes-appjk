import Carousel from 'react-bootstrap/Carousel';

function Transformation() {
    return (
        <div className='custome-container p-5'>
            <h1 className='text-center custome-h1 '>Transformation</h1>
            <Carousel fade>
                <Carousel.Item className='p-5'>
                    <img
                        className="d-block w-100"
                        src="https://scontent.fcai21-4.fna.fbcdn.net/v/t39.30808-6/336782700_908624770454520_3767585646862337630_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5MO643DScowAX_oN7AT&_nc_ht=scontent.fcai21-4.fna&oh=00_AfDwTjCEZ5ERVR6_IllbfI7lXRwF0pDo3wTwRmtBAgO0uw&oe=6467A418"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://scontent.fcai21-3.fna.fbcdn.net/v/t1.6435-9/116706541_1273295113016076_4314333958376501360_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=cz1YtH3ZlZoAX_uLwG1&_nc_ht=scontent.fcai21-3.fna&oh=00_AfBH-TndUtRUerB9qdZr1aTwyKgBBzISX18FbRPJ_L7RWQ&oe=648A17E6"
                        alt="Second slide"
                    />


                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://scontent.fcai21-4.fna.fbcdn.net/v/t1.6435-9/117166832_1273295349682719_5463126853040366565_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=wwXNms9vqyUAX_TJv9R&_nc_ht=scontent.fcai21-4.fna&oh=00_AfB5B2khQPpFIHjOWtuuThn4ABgzqDNuFiIL1dQ9uJaguw&oe=648A3D4C"
                        alt="Third slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://scontent.fcai21-4.fna.fbcdn.net/v/t1.6435-9/116587544_1273295323016055_8668718746498620755_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=u4AvRHZQPcQAX8KhpQs&_nc_ht=scontent.fcai21-4.fna&oh=00_AfAbm3TGkrioKgokXSY89HIsoCb7-PLO-DAD6M-Z4ORv_Q&oe=648A2214"
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Transformation;