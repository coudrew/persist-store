import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Colours } from '../components/Colours';
import { setCurrentColour, clearCurrentColour, undoSetCurrentColour } from '../actions/colours';

const mapStateToProps = state => {
    return {
        currentColour: state.colours.currentColour,
        previousColours: state.colours.previousColours
    };
};

const mapDispatchToProps = dispatch => ({
    setCurrentColour: colour => dispatch(setCurrentColour(colour)),
    clearCurrentColour: () => dispatch(clearCurrentColour()),
    undoSetCurrentColour: () => dispatch(undoSetCurrentColour())
});

export default connect(mapStateToProps, mapDispatchToProps)(Colours);
