import React from "react";
import { connect } from "react-redux";
import SmurfList from '../components/SmurfList'
import { getAction, postAction } from '../actions'


class SmurfView extends React.Component {
  constructor() {
    super();
  };

  componentDidMount() {
    getAction()
  };
  
  render() {
    return (
      <div className="SmurfList_wrapper">
        <SmurfList smurfs={this.props.smurfs} />
      </div>
    );
  };
};


function mapStateToProps(state){
  return {
    smurfs: state.smurfs,
    error: state.error,
  };
};


export default connect(
  mapStateToProps, getAction

)(SmurfView);