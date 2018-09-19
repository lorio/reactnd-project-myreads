import React, { Component } from 'react';
//import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import './App.css'

class Book extends Component {
   static propTypes = {
        book: PropTypes.object.isRequired
       /* updateShelf: PropTypes.func.isRequired*/
    }    
  render(){
    const { book, shelf, updateShelf } = this.props
    console.log(this.updateShelf)
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf ? book.shelf : 'none'} 
              onChange={book.shelf.updateShelf(book, shelf)}
              >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
           
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}
export default Book;