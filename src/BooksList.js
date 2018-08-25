import React, {Component} from 'react'
import BooksShelf from './BooksShelf';


class BooksList extends Component {
    

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                   <div>
                        <BooksShelf books = {this.props.books.filter((book) =>
                            (book.shelf === 'currentlyReading'))}
                            changeShelf ={this.props.books.onChange}
                        />
                        <BooksShelf books = {this.props.books.filter((book) =>
                            (book.shelf === 'read'))}
                            changeShelf ={this.props.books.onChange}
                        />
                        <BooksShelf books = {this.props.books.filter((book) =>
                            (book.shelf === 'wantToRead'))}
                            changeShelf ={this.props.books.onChange}
                        />                                                
                   </div>
                </div>
            </div>
        )
    }
}

export default BooksList