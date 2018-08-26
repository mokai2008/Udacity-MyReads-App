import React, {Component} from 'react'
import Book from './Book'


class BooksShelf extends Component {

    //updating the book to be in specifi shelf

    updateBook = (book, shelf) => {
      this.props.onChangeShelf(book, shelf)
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