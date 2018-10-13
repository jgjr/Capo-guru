import React, { Component, Fragment } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { withTheme  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MobileStepper from '@material-ui/core/MobileStepper';
import ChordDiagram from './ChordDiagram';
import Popup from './Popup';

class ChordsModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0
        }
    }

    handleClose() {
        this.props.close();
        this.setState({ activeStep: 0 });
    }

    handleNext() {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    }

    handleBack() {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    }

    handleStepChange(activeStep) {
        this.setState({ activeStep });
    }

    render() {
        const maxSteps = this.props.chords.length;
        const { activeStep } = this.state;
        const intro = (
            <Fragment>
                <a 
                    href="https://www.youtube.com/results?search_query=how+to+place+a+capo" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Place your capo
                </a> on fret {this.props.fret} and play the following chords:
            </Fragment>
        );
        return (
            <Popup
                open={this.props.open}
                handleClose={this.handleClose.bind(this)}
                title={'Capo on fret ' + this.props.fret}
                intro={intro}
            >
                <SwipeableViews
                    axis={'x'}
                    index={this.state.activeStep}
                    onChangeIndex={this.handleStepChange.bind(this)}
                    enableMouseEvents
                >
                    {this.props.chords.map((chord, index) => (
                        <ChordDiagram chord={chord} key={index} />
                    ))}
                </SwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button size="small" onClick={() => this.handleNext()} disabled={activeStep === maxSteps - 1}>
                        Next {<KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={() => this.handleBack()} disabled={activeStep === 0}>
                        {<KeyboardArrowLeft />} Back
                        </Button>
                    }
                /> 
            </Popup>
        );
    }
}

export default withTheme() (ChordsModal);
