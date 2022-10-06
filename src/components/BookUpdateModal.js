import React from 'react';
import { Modal,} from 'react-bootstrap';
import BookUpdateForm from './BookUpdateForm';

class BookUpdateModal extends React.Component {

   

    render() {
        return (
            <>
                <Modal
                    show={this.props.showUpdateModal}
                    onHide={this.props.hideModal}
                    books={this.props.books}
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
                            bookToUpdate={this.props.bookToUpdate}
                        >
                        </BookUpdateForm>
                    </Modal.Body>
                </Modal>
            </>

        )



    }
}

export default BookUpdateModal;