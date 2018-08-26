import React, {Component} from 'react'
import Book from './Book'
import PropTypes from 'prop-types'


class BooksShelf extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        chooseShelf: PropTypes.func.isRequired
    }

    //updating the book to be in specifi shelf

    updateBook = (book, shelf) => {
      this.props.chooseShelf(book, shelf)
    }
    render() {
      const books = this.props.books
      return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map((book, index) => (<Book book={book} key={index} updateShelf={(shelf) => {
                this.updateBook(book, shelf)
              }}/>))}
            </ol>
          </div>
        </div>
      )
    }
  }
  
  export default BooksShelf;