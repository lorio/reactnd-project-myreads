import React, { Component } from 'react';
//import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

import './App.css'

class Book extends Component {
  
  render(){
    const { book } = this.props.book
    console.log(book)
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select
              value = {this.shelf}
              onChange={this.handleChange}
              >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
           
          </div>
        </div>
        <div className="book-title">{this.title}</div>
        <div className="book-authors">{this.authors}</div>
      </div>
    )
  }
}
export default Book;