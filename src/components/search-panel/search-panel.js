import React, { Component } from 'react';
import "./search-panel.css"

export default class SearchPanel extends Component {
  constructor() {
    super();
    this.state = {
      label: ""
    };
    this.onLabelChange = (event) => {
      const label = event.target.value;
      this.setState({ label });
      event.preventDefault();
      this.props.onSearchLabel(label);
    };
  }

  render() {
    return (
      <div className="search-panel d-flex">
        <input type="text"
          className="form-control search-input"
          placeholder="type to search"
          onChange={this.onLabelChange}
          value={this.state.label} />
      </div>
    );
  }
};

