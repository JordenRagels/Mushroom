import React, { Component } from "react";
 
class MedsItems extends Component {
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }
 
  render() {
    var medsEntries = this.props.entries;
    var listItems = medsEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default MedsItems;