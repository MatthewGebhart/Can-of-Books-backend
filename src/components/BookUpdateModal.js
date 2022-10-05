import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import BookUpdateForm from './BookUpdateForm';

class BookUpdateModal extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const bookToUpdate = {
            title: e.target.title.value || this.props.book.title,
            description: e.target.description.value || this.props.book.description,
            status: e.target.status.value || this.props.book.status,
            _id: this.props.cat._id,
            _v: this.props.cat.v_v,
        }
        this.props.updateBooks(bookToUpdate);
    }

    render() {
        return (
            <>
                <Modal
                    show={this.props.showUpdateModal}
                    onHide={this.props.hideModal}
                    centered
                    size='lg'>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            "Edit Book Information"
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <BookUpdateForm
                            handleBookUpdate={this.props.handleBookUpdate}
                        >
                        </BookUpdateForm>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Modal.Body>
                </Modal>
            </>

        )



    }
}

export default BookUpdateModal;