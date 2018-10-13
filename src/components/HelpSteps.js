import React, { Component } from 'react';
import { withTheme, withStyles } from '@material-ui/core/styles';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Stepper from '@material-ui/core/Stepper';

const styles = theme => ({
    Stepper: {
        margin: 'auto',
        maxWidth: 960,
    }
});

class HelpSteps extends Component {

    changeStep(index) {
        this.props.changeStep(index);
    }

    render() {
        const steps = ['Add chords', 'View sequence', 'Capo positions', 'Possible keys'];
        const { classes } = this.props;
        return (
            <div style={{position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#ffffff', zIndex: 20}}>
                <Stepper activeStep={this.props.activeStep} nonLinear className={classes.Stepper}>
                    {steps.map((label, index) => (
                        <Step key={index}>
                            <StepButton
                                onClick={() => this.changeStep(index)}
                                completed={this.props.activeStep > index}
                            >
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
            </div>
        );
    }
}

export default withStyles(styles) (withTheme()(HelpSteps));
