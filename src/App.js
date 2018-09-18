import React from 'react'
import * as BooksAPI from './BooksAPI'
import MainPage from './MainPage'
import SearchPage from './SearchPage'
import './App.css'

class BooksApp extends React.Component {

  state = {
   books: [] ,   shelf: 'none'
  }

 /* const shelfChange = 
    document.getElementsByTagName('select');
  let selection = shelfChange.value
  handleChange = (e) => {
    if(shelfChange == e.target.value) {
      this.setState({ book, shelf})
    })
  };
*/
  updateShelf = (book, shelf) => {
    let newShelf;
    let books;
    books = this.state.books.map((book, e) => {
      if(e.target === book.key) {
        newShelf = book.shelf;
        return {...book, shelf}
      } else {
        return book;
      }
    })
    console.log(this.props.updateShelf)
    this.setState((prevState, props) => {
      console.log(this.state.value)
    return { shelf: prevState.shelfChange.value }
    }); 
  };
 
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

  /*moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(data);
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
