import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'
import './App.css'

class SearchPage extends Component {
  state = {
    query: '',
    searchResults: []
  }
  updateQuery = (query) => {
    this.setState({
      query: query
    })
  }
  render(){
    const { query } = this.state
    const { books } = this.props
    let showResults
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showResults = books.filter((book) => match.test(book.title))
      } else {
        showResults = "No results found"
      }
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className="close-search"
          ></Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
          )
        }
      }
      export default SearchPage;