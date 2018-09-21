import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
/*import escapeRegExp from 'escape-string-regexp'*/
import Book from './Book'
import './App.css'

class SearchPage extends Component {
  state = {
    query: '',
    searchResults: []
  }
    showResults = (query) => {
    if(query) {
      BooksAPI.search(query).then((searchResults) => {
        this.setState({ searchResults: searchResults })
        })  
      } else {
        console.log('no results');
        this.setState({ searchResults: [] })
        }       
      }
  updateQuery = (query) => {
    this.setState({ query: query })
    this.showResults(query);
  }
  render(){
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
                value={undefined}
                onChange={(event) => this.updateQuery(
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