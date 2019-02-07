import React from "react";
import {deleteAction} from '../actions'
import {connect} from 'react-redux';

class Smurf extends React.Component {

  deleteHandler = (smurf) => {
    console.log('here!')
    this.props.deleteAction(smurf)
    window.location.reload()
  };

  render() {
    return (
      <div> 
      <p>{this.props.smurf.name}</p> 
      <p>{this.props.smurf.age}</p>
      <p>{this.props.smurf.height}</p>
      <button onClick={() => this.deleteHandler(this.props.smurf.id)}>
        Delete Smurf</button>
    </div>
    );
  }
};

function mapStateToProps(state){
  return {
    smurfs: state.smurfs,
    error: state.error,
  };
};


export default connect(
  mapStateToProps, {deleteAction}

)(Smurf);
