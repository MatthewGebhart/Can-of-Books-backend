// import { ErrorResponse } from '@remix-run/router';
import axios from 'axios';
import React from 'react';
import Book from './components/Book.js';
import BookFormModal from './components/BookFormModal.js';
import Button from 'react-bootstrap/Button';
import BookUpdateModal from './components/BookUpdateModal.js';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
      showUpdateModal: false,
    }
  }

  getBooks = async () => {
    try {
      let bookData = await axios.get(`${process.env.REACT_APP_SERVER_REMOTE}/book`);
      this.setState({
        books: bookData.data
      })

    } catch (error) {
      console.log('Whoopsie, we did not get book data', error.response);
    }
  }

  handleBookCreate = async (bookInfo) => {
    console.log ('bookInfo is:', bookInfo);
    try {
        const res = await axios.post(`${process.env.REACT_APP_SERVER_REMOTE}/book`, bookInfo);
        const createdBook = res.data;
        console.log(res.data);
        this.setState({
            books: [...this.state.books, createdBook],
        })
    } catch (error) {
        console.log("Error, there is a problem: ", error.response);
    }
  }
  handleBookUpdate = async (bookToUpdate) => {
    this.setState({
      showUpdateModal: true
    })
    try {
      const url = `${process.env.REACT_APP_SERVER}/book/${bookToUpdate._id}`;
      const updatedBook = await axios.put(url,bookToUpdate);
      const updatedBookArray = this.state.books.map(existingBook => {
        return existingBook._id === bookToUpdate._id ? updatedBook : existingBook;
      });
      this.setState({
        books: updatedBookArray
      })

    } catch (error) {
      console.log('error in cat post: ', error.response);
    }
  }

  componentDidMount() {
    this.getBooks();
  };

  handleUpdateClick = () => {
    this.setState({showUpdateModal: true})
  }

  handleClick = () => {
  this.setState({showModal: true})
}


  hideModal =() => {
  this.setState({showModal: false})
}

  handleDelete = async (bookToDelete) => {
  try {
    const response = await axios.delete(`${process.env.REACT_APP_SERVER_REMOTE}/book/${bookToDelete._id}`);
    console.log('The response.status is: ', response.status);
    const filteredBooks = this.state.books.filter(book => {
      return book._id !== bookToDelete._id;
    });
    this.setState({
      books: filteredBooks,
    })
  } catch (error) {
    console.log("We have an error: Oh NO ", error.response);
  }

}

// setShowModal = () => {
//   this.setState({
//     showModal: true
//   });
// }

  render() {
    console.log(this.state.books);
    return (
      <>
      <Button onClick={this.handleClick} variant="primary" type="submit">
        Add New Book
      </Button>

        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Book books={this.state.books}
                handleDelete={this.handleDelete} 
                />
        ) : (
          <h3>No Books Found :(</h3>
        )}
        <BookFormModal
        showModal={this.state.showModal}
        hideModal={this.hideModal}
        handleBookCreate={this.handleBookCreate}
        />
        <BookUpdateModal
          handleBookUpdate={this.handleBookUpdate}
          hideModal={this.hideModal}
          showUpdateModal={this.state.showUpdateModal}
        />
      </>
    )
  }
}

export default BestBooks;
