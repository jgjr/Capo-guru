import React, { Component, Fragment } from 'react';
import HelpSteps from './HelpSteps';
import Intro from './Intro';

const overlayStyles = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.4)',
    zIndex: 10,
};

class Helper extends Component {

    changeStep(index) {
        this.props.changeStep(index);
    }

    displayChildren() {
        if (this.props.active) {
            return React.Children.map(this.props.children, child => {
                if (child.props.helperIndex === this.props.step) {
                    return React.cloneElement(child, {
                        helperActive: true,
                        changeStep: (index) => this.changeStep(index),
                        toggleHelp: () => this.props.toggleHelp()
                    });
                } else {
                    return child
                }
            });
        } else if (!this.props.sequenceLength && !this.props.visited) {
            return (
                <Fragment>
                    <Intro toggleHelp={this.props.toggleHelp} />
                    {this.props.children[0]}
                </Fragment>
            );
        } else if (!this.props.sequenceLength) {
            return (
                <Fragment>
                    {this.props.children[0]}
                    {this.props.children[1]}
                </Fragment>
            );
        } else {
            return this.props.children;
        }
    }

    render() {
        return (
            <Fragment>
                {this.displayChildren()}
                {this.props.active ? <HelpSteps activeStep={this.props.step} changeStep={(index) => this.changeStep(index)} /> : null}
                {this.props.active ? <div style={overlayStyles}></div> : null}
            </Fragment>
        );
    }
}

export default Helper;
