import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import {Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'


class BooksAdd extends Component {

    static propTypes = {
        currentBooks: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired
    }

    state = {
      query: '',
      Books: []
    }

    updateQuery = (event) => {
      const value = event.target.value
        this.setState(() => {
            return {query: value}
          })

          this.searchForBook(value)
    }

/* I have tried alot to use the regExp but there's a problem 
    Also a problem in using short-circut evalution instead of if statement
    Tried also to use sort by author or title but nothing changed 
*/

// getting book search result according to user input

    searchForBook = (searchTerm) => {
        if (searchTerm.length !== 0) {
          BooksAPI.search(searchTerm).then((books) => {
            if (books.length > 0) {
              books = books.filter((book) => (book.imageLinks))
              books = this.changeTheShelf(books)
              this.setState(() => {
                return {Books: books}
              })
            }
          })
        } else {
          this.setState({Books: [], query: ''})
        }
      }
 
// change the shelf of book in results

    changeTheShelf = (books) => {
      let allBooks = this.props.currentBooks
      for (let book of books) {
        book.shelf = "none"
      }
  
      for (let book of books) {
        for (let b of allBooks) {
          if (b.id === book.id) {
            book.shelf = b.shelf
          }
        }
      }
      return books
    }
  

// adding the book to specific shelf in main page

    addBook = (book, shelf) => {
      this.props.onChange(book, shelf)
    }
  
    render() {
      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/' className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author"
               value={this.state.query} 
               onChange={this.updateQuery}/>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.query.length > 0 && 
              this.state.Books.map((book, index) => (
              <Book book={book} key={index} updateShelf={(shelf) => {
                this.addBook(book, shelf)
              }}/>))}
            </ol>
          </div>
        </div>
      )
    }
  }
  
  export default BooksAdd;
  