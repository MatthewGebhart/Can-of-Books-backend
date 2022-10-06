import React from 'react';
// import Book from './Book.js';
import { Form, Container, Button } from 'react-bootstrap';

class BookUpdateForm extends React.Component {


    handleSubmit = (e) => {
        e.preventDefault();
        const bookToUpdate = {
            title: e.target.title.value || this.props.bookToUpdate.title,
            description: e.target.description.value || this.props.bookToUpdate.description,
            status: e.target.status.value || this.props.bookToUpdate.status,
            _id: this.props.bookToUpdate._id,
            _v: this.props.bookToUpdate.__v,
        }
        this.props.handleBookUpdate(bookToUpdate);
    }



    render() {
        return (

            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Add New Book</Form.Label>
                        <Form.Control type="text" placeholder={this.props.bookToUpdate.title} />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder={this.props.bookToUpdate.description} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="status">
                        <Form.Check type="checkbox" label="I have read" unchecked/>

                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}
export default BookUpdateForm;