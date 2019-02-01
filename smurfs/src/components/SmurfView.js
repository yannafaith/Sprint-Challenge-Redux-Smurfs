import React from "react";
import { connect } from "react-redux";
import SmurfList from '../components/SmurfList'
import SmurfForm from '../components/SmurfForm'
import { getAction} from '../actions'


class SmurfView extends React.Component {

  componentDidMount() {
    this.props.getAction()
  };
  
  render() {
    return (
      <div className="SmurfList_wrapper">
        <SmurfForm />
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
  mapStateToProps, {getAction}

)(SmurfView);