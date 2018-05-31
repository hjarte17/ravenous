import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render (){
    return (
      <div class="BusinessList">
        <Business /><!-- Add Business Component here -->
        <Business /><!-- Add Business Component here -->
        <Business /><!-- Add Business Component here -->
        <Business /><!-- Add Business Component here -->
        <Business /><!-- Add Business Component here -->
        <Business /><!-- Add Business Component here -->
      </div>
    );
  }
}

export default BusinessList;
