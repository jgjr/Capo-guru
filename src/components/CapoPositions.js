import React, { Component, Fragment } from 'react';
import { withTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import CapoPosition from './CapoPosition';
import HelperText from './HelperText';
import Section from './Section';
import SectionTitle from './SectionTitle';

class CapoPositions extends Component {

    title() {
        if (this.props.positions.length === 0) {
            return 'No possible positions';
        } else if (this.props.positions.length === 1) {
            return 'Possible position';
        } else {
            return 'Possible positions';
        }
    }

    render() {
        return (
            <Fragment>
                <Section helperActive={this.props.helperActive}>
                    <SectionTitle title={this.title()} tooltip="Click a position for info" />
                    <List component="nav">
                        {this.props.positions.map((position, index) => {
                            return (
                                <CapoPosition key={index} fret={position.fret} chords={position.sequence.fullChords()} />
                            )
                        })}
                    </List>
                </Section>
                <HelperText active={this.props.helperActive} button="Next" action={() => this.props.changeStep(3)}>
                    This is the main part of the application. It may well be the case that the chords you have inputted can be played by positioning a capo on your guitar at a specific fret and playing only 'open' chords. If that is the case, the frets on which you can position your capo, and the chords you would then have to play will appear here. Click on a positon for diagrams of how to play each chord. 
                </HelperText>
            </Fragment>
        );
    }
}

export default withTheme() (CapoPositions);
