import React, {Component} from 'react';
import './added-list-item.css';


export default class AddedListItem extends Component {
constructor(){
  super();
  this.state = {
    label: ""
  };
this.onLabelChange = (event) =>{
  this.setState({
    label: event.target.value
  });
};

this.onSubmit = (event) =>{
  event.preventDefault();
  this.props.onAddedItem(this.state.label);
  this.setState({
    label: ""
  });
};
}

  render(){
return (
        <form className='item-add-form d-flex'
              onSubmit={this.onSubmit}>
        <input type="text"
               className="form-control"
               onChange={this.onLabelChange}
               placeholder="What needs o be done"
               value={this.state.label}/>
          < button
        className = "btn btn-outline-primary" >
      Add
      </button>
        </form>
        );
      }
    };

