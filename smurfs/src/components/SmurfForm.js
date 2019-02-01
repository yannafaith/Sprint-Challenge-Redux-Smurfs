import React from 'react';
import {connect} from 'react-redux';
import {postAction} from '../actions'


class SmurfForm extends React.Component {
    constructor() {
        super();
    };

    addSmurf = () => {
        const name = prompt('New Smurf Name');
        const age = prompt('New Smurf Name');
        const height = prompt('New Smurf Name');
        this.props.postAction({name, age, height});
    };

    render() {
        return (
            <div>
                <p>Add a New Smurf by Pressing the Button Below</p>
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