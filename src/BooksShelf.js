import React, {Component} from 'react'
import Books from './Books'


class BooksShelf extends Component {
    
    updateBook = (book, shelf) => {
        this.props.changeShelf(book, shelf)
    }

    render() {
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">this.props.title</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     {this.props.books.map((book, index) => (
                         <Books books = {book} key = {index} updateShelf = {(shelf) => {
                             this.updateBook(book, shelf)
                         }}
                     />))} 
                     
                    </ol>
                    </div>
            </div>
        )
    }
}

export default BooksShelf