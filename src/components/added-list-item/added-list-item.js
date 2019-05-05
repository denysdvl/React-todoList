import React, {Component} from 'react';
import './added-list-item.css';


export default class AddedListItem extends Component {
render(){
return (
        <div>
          < button type = "button"
          onClick={() => this.props.onAddedItem('Sosi pisos')}
      className = "btn btn-added btn-outline-primary btn-sm float-right" >
      +
      </button>
        </div>
        );
      }
    };

