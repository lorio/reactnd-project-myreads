import React, { Component } from 'react';
import { Link } from 'react-router-dom'
/*import * as BooksAPI from './BooksAPI'*/
/*import escapeRegExp from 'escape-string-regexp'*/
import Book from './Book'
import './App.css'

class SearchPage extends Component {
  state = {
    query: '',
    searchResults: []
  }
  
  render(){
    /*const { query } = this.state
    let { books } = this.props*/
    /*let searchResults;
    if (query) {
      const match = searchResults: searchResults}
      searchResults = books.filter((book) => 
      } else {
        searchResults = "No results found"
      }*/
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className="close-search"
          ></Link>
            <div className="search-books-input-wrapper">
              <input 
                type="text" 
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.props.showResults(
                  event.target.value)}
              />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
               {
                this.state.searchResults.map(searchResults => {
                  let shelf = 'none';
                  this.props.books.map(book => (
                    book.id === searchResults.id ?
                    shelf = book.shelf :
                    ''
                    ));
                  return (
                    <li key={searchResults.id}>
                      <Book
                        book={searchResults}
                        updateShelf={this.props.updateShelf}
                        updateQuery={this.props.updateQuery}
                        currentShelf={shelf}
                      />
                    </li>
                  );
                })
               }
            </div>
          </div>
          )
        }
      }
      export default SearchPage;