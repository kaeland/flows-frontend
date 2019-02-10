import React from "react";
import { connect } from "react-redux";
import { Input } from "semantic-ui-react";
import changeData from "../../redux/actions/machineRoundActions"

const MachineRound = props => {
  return (
    <Input
      {...props}
    />
  );
};

const mapStateToProps = state => {
  
};

const mapDispatchToProps = dispatch => {
  return {
    changeData: (id, data) => dispatch(changeData(id, data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MachineRound);
