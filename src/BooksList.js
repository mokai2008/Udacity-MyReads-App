import React, {Component} from 'react'
import BooksShelf from './BooksShelf';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class BooksList extends Component {

 static propTypes = {
     books: PropTypes.array.isRequired,
     onChange: PropTypes.func.isRequired
 }

    render() {
      const books = this.props.books
  
      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>

              <BooksShelf books={books.filter((book) => (book.shelf === "currentlyReading"))} title="Currently Reading" chooseShelf={this.props.onChange}/>
  
              <BooksShelf books={books.filter((book) => (book.shelf === "wantToRead"))} title="Want to Read" chooseShelf={this.props.onChange}/>

              <BooksShelf books={books.filter((book) => (book.shelf === "read"))} title="Read" chooseShelf={this.props.onChange}/>
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
      )
    }
  }
  
  export default BooksList;