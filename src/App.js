import React from 'react'
import * as BooksAPI from './BooksAPI'
import MainPage from './MainPage'
import SearchPage from './SearchPage'
import './App.css'

class BooksApp extends React.Component {
  state = {
   books: [] /*,
   shelf: {option}*/
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
   /* showSearchPage: false*/
  /*updateShelf = (option) => {
    this.setState(book, shelf);
    }
  };*/
  /*moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
  }*/
  render() {
    return (
      <div className="app">
        <MainPage
          books={this.state.books}
        />
      </div>
    )
  }
}

export default BooksApp
