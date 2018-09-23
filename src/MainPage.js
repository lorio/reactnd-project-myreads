import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'
import './App.css'

const MainPage = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                  props.books
                    .filter(book => book.shelf === 'currentlyReading')
                    .map(book => (
                      <li key={book.id}>
                        <Book
                          book={book}
                          updateShelf={props.updateShelf}
                          currentShelf='currentlyReading'
                        />
                      </li>
                    ))
                  }                
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    props.books
                      .filter(book => book.shelf === 'wantToRead')
                      .map(book => (
                        <li key={book.id}>
                          <Book
                            book={book}
                            updateShelf={props.updateShelf}
                            currentShelf='wantToRead'
                          />
                        </li>
                      ))
                  }               
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    props.books
                      .filter(book => book.shelf === 'read')
                      .map(book => (
                        <li key={book.id}>
                          <Book
                            book={book}
                            updateShelf={props.updateShelf}
                            currentShelf='read'
                          />
                        </li>
                      ))
                  }               
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link
            to='/search'
            className='SearchPage'    
          ></Link>
        </div>
      </div>
    )
  }

MainPage.proopTypes = {
  books: PropTypes.array.isRequired
}

export default MainPage;
