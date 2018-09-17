import React, { Component } from 'react';

class BookShelfChanger extends Component
  state={book.shelf}
 
  handleChange = (event) => {
    this.setState({option: event.target.value})
  }  
render() {
  return (
   <select
    value = {this.state.option}
    onChange={this.handleChange}              
    >
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  )
}
 





  export default BookShelfChanger;