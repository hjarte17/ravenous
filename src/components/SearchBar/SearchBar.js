import React from 'react';
import import './SearchBar.css';

sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends React.component {
  renderSortByOptions(){
    return this.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOption[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }
  render(){
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            this.renderSortByOptions();
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Lets Go</a>
        </div>
      </div>

    );
  }
}

export default SearchBar;