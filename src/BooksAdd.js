import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Books from './Books'
import {Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class BooksAdd extends Component {
    
    state = {
        query = '',
        Books = []
    }

    updateQuery = (query) => {
        this.setState({query: query.trim()})
    }

    let showingBooks
    if (this.state.query) {
        const match = new RegExp(escapeRegExp(this.state.query), 'i')
        showingBooks = this.state.Books.filter((book) => 
        match.test(book.title))
    } else {
        showingBooks = this.state.Books
    }

    addBook = (book, shelf) => {
        this.props.onChange(book, shelf)
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                <Link to = '/' className = 'close-search'>Close</Link>
                    <div className="search-books-input-wrapper">
                      <input type="text" placeholder="Search by title or author" 
                        value = 'this.state.query'
                        onChange = {(event) => this.updateQuery(event.target.value)}
                        />
                </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
              {this.state.Books.map((book, index) => (
                  <Books books= {book} key = {index} updateShelf = {(shelf) => {
                      this.addBook(book, shelf)
                  }}
              />))}
            </div>
          </div>
        )
    }
}

export default BooksAdd