import React, { Component, Fragment } from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import Typography from '@material-ui/core/Typography';
import ChordChip from './ChordChip';
import HelperText from './HelperText';
import Section from './Section';
import SectionTitle from './SectionTitle';

const styles = theme => ({
    Icon: {
        position: 'relative',
        top: 3,
        fontSize: 14
    },
    Title: {
        marginBottom: theme.spacing.unit * 2,
    },
    Subtitle: {
        display: 'inline',
        fontSize: '.5em',
        color: 'green'
    },
});

class OriginalChords extends Component {

    title() {
        if (this.props.chords.length === 0) {
            return 'Add a chord above';
        } else if (this.props.chords.length === 1) {
            return 'Original chord';
        } else {
            return 'Original chords';
        }
    }

    open(classes) {
        if (this.props.alreadyOpen) {
            return (
                <Typography variant="subheading" component="span" className={classes.Subtitle}><CheckIcon className={classes.Icon} /> open</Typography>
            );
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Section helperActive={this.props.helperActive}>
                    <SectionTitle tooltip="Your chords, 'x' to remove">
                        {this.title()} {this.open(classes)}
                    </SectionTitle>
                    {this.props.chords.map((chord, index) => {
                        return (
                            <ChordChip key={index} chord={chord} onClick={() => this.props.removeChord(index)} removable />
                        )
                    })}
                </Section>
                <HelperText active={this.props.helperActive} button="Next" action={() => this.props.changeStep(2)}>
                    Here is your chord sequence. You can always add more chords using the box above, and you can remove individual chords by clicking on the 'x' next to their name. If your chord sequence can already be played using open chords you will see a little green tick above. 
                </HelperText>
            </Fragment>
        );
    }
}

export default withStyles(styles) (withTheme()(OriginalChords));
