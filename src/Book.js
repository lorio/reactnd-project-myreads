import React, { Component } from 'react';
//import { Link } from 'react-router-dom'
/*import * as BooksAPI from './BooksAPI'*/
import PropTypes from 'prop-types'
import './App.css'

class Book extends Component {
   static propTypes = {
        book: PropTypes.object.isRequired,
        updateShelf: PropTypes.func.isRequired
    }    
  render(){
    const { updateShelf, currentShelf } = this.props
    let displayThumbnail = this.props.book.imageLinks ?
      this.props.book.imageLinks.thumbnail :
      '';
    console.log(this.updateShelf)
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${displayThumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <select value={currentShelf} 
              onChange={(event) => updateShelf(
                this.props.book, event.target.value
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
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}
export default Book;