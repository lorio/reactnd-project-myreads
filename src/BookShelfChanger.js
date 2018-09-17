import React, { Component } from 'react';

class BookShelfChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {value: book.shelf }
    this.handleChange = this.handleChange.bind(this);
  }
  state = {book, shelf}
 
  handleChange = (event) => {
    this.setState({value: book.shelf})
  }  
  render() {
    return (
     <select
      value = {this.state.value}
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
}




  export default BookShelfChanger;