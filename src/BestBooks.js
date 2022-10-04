// import { ErrorResponse } from '@remix-run/router';
import axios from 'axios';
import React from 'react';
import Book from './Book.js';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
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

  componentDidMount() {
    this.getBooks();
  };

  render() {
    console.log(this.state.books);
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Book books={this.state.books} />
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
