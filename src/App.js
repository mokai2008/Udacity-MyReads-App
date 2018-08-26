import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import BooksList from './BooksList'
import BooksAdd from './BooksAdd'
import './App.css'

class BooksApp extends React.Component {

  state = {
    Books: []
  }
  
  componentDidMount() {
    this.fetch_books_details()
  }

  fetch_books_details = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({Books: books})
    })
  }

  update_books_details = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.fetch_books_details()
    })
  }
    render() {
      return (
        <div className = 'app'>

          <Route exact path = '/' render = {() => (
            <BooksList books = {this.state.Books} 
             onChange = {this.update_books_details}/>
          )}/>
          
          <Route exact path = '/search' render = {(history) => (
            <BooksAdd onChange = {this.update_books_details} currentBooks = {this.state.Books}/>
          )}/>

        </div>
      )
    }
  }

export default BooksApp
