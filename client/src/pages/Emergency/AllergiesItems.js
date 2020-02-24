import React, { Component } from "react";
 
class AllergiesItems extends Component {
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }
 
  render() {
    var allergiesEntries = this.props.entries;
    var listItems = allergiesEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default AllergiesItems;