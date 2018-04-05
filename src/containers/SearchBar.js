import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: '',
    }

    // need to bind the context of 'this'
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(e) {
    this.setState({ term: e.target.value })
  }

  render() {
    return (
      <form className="input-group">
        <input 
          placeholder="Enter a city to get the 5-day forcast"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}