import React, { Component } from "react";
import AllergiesItems from "./AllergiesItems"

class AllergiesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);

    }

    addItem(e){
        if (this._inputElement.value !== ""){
            var newItem={
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            this._inputElement.value = "";
        }
        e.preventDefault();

    }
    render() {
      return (
        <div className="AllergiesMain">
          <div className="header">
            <form onSubmit={this.addItem}>
              <input ref={(a) => this._inputElement = a}
              placeholder="">
              </input>
              <button type="submit">add</button>
            </form>
          </div>
          <AllergiesItems entries={this.state.items}/>
        </div>
      );
    }
  }
 
  export default AllergiesList;