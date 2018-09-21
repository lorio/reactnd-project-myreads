import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import MainPage from './MainPage'
import SearchPage from './SearchPage'
import './App.css'

class BooksApp extends React.Component {

  state = {
   books: [] 
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }
  updateQuery = (query) => {
    this.setState({ query: query })
    this.showResults(query);
  }
  showResults = (query) => {
    if(query) {
      BooksAPI.search(query).then((searchResults) => {
        this.setState({ searchResults: searchResults })
        })  
      } else {
        console.log('no results');
        }  /*this.setState({ searchResults: [] })     */
      }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({books: books})
      })
    })
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MainPage
            books={this.state.books}
            book={this.state.book}
            updateShelf = {this.updateShelf}
            />
          )} />
          <Route path='/search' render={() => (
            <SearchPage
              /*updateShelf={this.updateShelf}*/
              updateQuery={this.state.showResults}
              books={this.state.books}
              />
          )} />  
      </div>
    )
  }
}

export default BooksApp
