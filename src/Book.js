import React, {Component} from 'react'


class Book extends Component {

  // changing the shelf of the book function

  changeShelfOfBook = (event) => {
    this.props.updateShelf(event.target.value)
  }

  render() {

    //shorting some code
    
    const bookShort = this.props.book
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${bookShort.imageLinks.thumbnail}")`
            }}></div>
            <div className="book-shelf-changer">
              <select onChange={this.changeShelfOfBook} value={bookShort.shelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{bookShort.title}</div>
          <div className="book-authors">{bookShort.authors}</div>
        </div>
      </li>
    )
  }
}
export default Book