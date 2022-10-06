import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';


class Book extends React.Component {
    render() {
        return (
            <>
           
            <Container>
                <Carousel style={{ backgroundColor: 'grey', color: 'white', height: '300px'}}>
                    {this.props.books.map((data) => {
                        return (
                            <Carousel.Item key={data._id}>
                                <div id='carousel-title' className='text-center'>
                                    <h2>{data.title}</h2>
                                    <div id='carousel-content'>
                                        <div>
                                            <h3>Description:</h3>
                                            <p>{data.description}</p>
                                            <Button onClick={() => this.props.handleDelete(data)} key={data._id} variant="warning" type="submit">
                                                Delete Book
                                            </Button>
                                            <Button onClick={() => this.props.handleUpdateClick(data)}
                                             variant="warning" type="submit">
                                                Update Book
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </Container>
            </>


        )
    }
}export default Book;