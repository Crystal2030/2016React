import React from "react";
import {connect} from "react-redux";
import Mouse from "../components/Mouse/Mouse";

const RootApp = connect((state) => {
    return {
        value: state
    }
},(dispatch) => {
    return {

    }
})(Mouse);

export default RootApp;