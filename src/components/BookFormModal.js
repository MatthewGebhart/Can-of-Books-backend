import React from 'react';
import {Modal} from 'react-bootstrap';
import BookForm from './BookForm';

class BookFormModal extends React.Component {
    render() {
        return (
            <>
            <Modal 
            show={this.props.showModal}
            onHide={this.props.hideModal} 
            centered 
            size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>
                    "Add New Book"
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <BookForm
                handleBookCreate={this.props.handleBookCreate}
                >

                </BookForm>
            </Modal.Body>
            </Modal>
            </>

        )



    }
}

export default BookFormModal;