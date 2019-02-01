import React from 'react';
import {connect} from 'react-redux';
import {postAction} from '../actions'
class SmurfForm extends React.Component {

    addSmurf = () => {
        const name = prompt('New Smurf Name');
        const age = prompt('New Smurf Age');
        const height = prompt('New Smurf height');
        this.props.postAction({name, age, height});
    };

    render() {
        return (
            <div>
                <button onClick={() => this.addSmurf()}>Add New Smurf</button>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
      error: state.error,
    };
  };
  
  export default connect(mapStateToProps, { postAction })(SmurfForm);