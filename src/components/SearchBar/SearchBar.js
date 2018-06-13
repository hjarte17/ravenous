import React from 'react';
import './SearchBar.css';
//Sets the key-value pairs needed to access the info from yelp api
const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);


  }

  //Checks the state of sortBy to change the css to give feedback to ther user
  getSortByClass(sortByOption){
    if(this.state.sortBy === sortByOption){
      return 'active';
    }
    else {
      return '';
    }
  }

  handleSortByChange(sortByOption){
    this.setState({sortBy: sortByOption});
  }
  handleTermChange(event){
    this.setState({term: event.target.value})
  }
  handleLocationChange(event){
    this.setState({location: event.target.value})
  }
  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);

    event.preventDefault();
  }

  //Dynamically create the list items needed to display the sort options
  renderSortByOptions(){
    //Access the keys of the sortByOptions object and iterate through them using the map() method
    return Object.keys(sortByOptions).map(sortByOption => {
      //Access the sortByOptions values using the sortByOption parameter of the callback function and stores them in sortByOptionValue
      let sortByOptionValue = sortByOptions[sortByOption];
      return (<li className={this.getSortByClass(sortByOptionValue)}
                  key={sortByOptionValue}
                  onClick={this.handleSortByChange}>
                {sortByOption}
             </li>);
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
          <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
          <input placeholder="Where?" onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Lets Go</a>
        </div>
      </div>

    );
  }
}

export default SearchBar;
