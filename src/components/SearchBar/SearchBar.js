import React from 'react';
import './SearchBar.css';
//Sets the key-value pairs needed to access the info from yelp api
const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
  //Dynamically create the list items needed to display the sort options
  renderSortByOptions(){
    //Access the keys of the sortByOptions object and iterate through them using the map() method
    return Object.keys(sortByOptions).map(sortByOption => {
      //Access the sortByOptions values using the sortByOption parameter of the callback function and stores them in sortByOptionValue
      let sortByOptionValue = sortByOption[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }
  render(){
    //Sets the way SearchBar will be displayed
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
        {/*Creates the list to display the sort options from renderSortByOptions method*/}
          <ul>
            {this.renderSortByOptions()}
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
