import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import debounce from 'lodash.debounce'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import './App.css'

class SearchPage extends Component {
  state = {
    query: '',
    searchResults: []
  }
  //update the server with user's query and handle errors in user input or case of failed search
    showResults = (query) => {
    if(query) {
      BooksAPI.search(query).then((searchResults) => {
        if (searchResults.error) {
          this.setState({ searchResults: [] });
        } else {
          this.setState({ searchResults: searchResults })
        }
      })  
    } else {
      this.setState({ searchResults: [] })
      }       
    }
  showResultsDebounced = debounce(this.showResults, 1000)
    // Pass this array to render
  updateQuery = (query) => {
    this.setState({ query: query })
    this.showResultsDebounced(query);
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