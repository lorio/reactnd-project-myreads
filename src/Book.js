import React, { Component } from 'react';
//import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelfChanger from './BookShelfChanger'
import './App.css'

class Book extends Component {
  
  render(){
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <BookShelfChanger
              book = {book, updateShelf}
            />
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}
export default Book;