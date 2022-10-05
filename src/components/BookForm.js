import React from 'react';
// import Book from './Book.js';
import {Form, Container, Button} from 'react-bootstrap';

class BookForm extends React.Component{


handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleBookCreate({
        title: e.target.title.value,
        description: e.target.description.value,
        status: e.target.status.checked,
    });
}



    render() {
    return(
        
        <Container>
        <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Add New Book</Form.Label>
        <Form.Control type="text" placeholder="Book Name" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="status">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Container>
    )
}
}
export default BookForm;