import React from "react";
import Smurf from './Smurf';

const SmurfList = props => {
  return (
    <div>
      <h1>Smurf Village 2.0</h1>
      {props.smurfs.map(smurf => {
        return <Smurf key={smurf.name} smurf={smurf} />;
      })}
    </div>
  );
};

export default SmurfList;