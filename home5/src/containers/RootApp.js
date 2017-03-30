import React from "react";
import {connect} from "react-redux";
import Mouse from "../components/Mouse/Mouse";
import {Hit} from "../components/Mouse/MouseRedux";

const mapStateToProps = (state) => {
    return {
        value: state
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        // onIncrement: () => dispatch(Inc()),
        // onDecrement: () => dispatch(Dec())
        onHit: () => dispatch(Hit())
    }
};
const RootApp = connect(mapStateToProps,mapDispatchToProps)(Mouse);

export default RootApp;