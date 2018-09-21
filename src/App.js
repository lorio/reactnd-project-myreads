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
              updateQuery={this.state.updateQuery}
              books={this.state.books}
              />
          )} />  
      </div>
    )
  }
}

export default BooksApp
