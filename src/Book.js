import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css'

const Book = (props) => {
  let displayThumbnail = props.book.imageLinks ?
    props.book.imageLinks.thumbnail :
      '';
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${displayThumbnail}")` }}></div>
        <div className="book-shelf-changer">
          <select value={props.currentShelf} 
            onChange={(event) => props.updateShelf(
              props.book, event.target.value
              )}
            >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
         
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors}</div>
    </div>
  )
}
Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired
  }    
export default Book;