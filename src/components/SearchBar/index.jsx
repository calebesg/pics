import React from 'react';

import './style.css';

export class SearchBar extends React.Component {
  state = { term: '' };

  onSubmitSearch(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="">
        <form className="c-form" onSubmit={e => this.onSubmitSearch(e)}>
          <div className="field">
            <label htmlFor="search">Image Search</label>
            <input
              type="text"
              id="search"
              placeholder="Search"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
