import React, { Component, Fragment } from 'react';
import { withTheme, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Section from './Section';
import SectionTitle from './SectionTitle';
import HelperText from './HelperText';

const styles = theme => ({
    Title: {
        marginBottom: theme.spacing.unit * 2,
    },
});

class PossibleKeys extends Component {

    title() {
        if (this.props.keys.length === 0) {
            return 'No possible keys';
        } else if (this.props.keys.length === 1) {
            return 'Possible key';
        } else {
            return 'Possible keys';
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Section helperActive={this.props.helperActive}>
                    <SectionTitle title={this.title()} tooltip="If your chords fit a key" />
                    {this.props.keys.map((key, index) => {
                        return (
                            <Chip key={index} label={key.root} className={classes.Chip}/>
                        )
                    })}
                </Section>
                <HelperText active={this.props.helperActive} button="Done!" action={() => this.props.toggleHelp()}>
                    If the chords you have entered all fit into one or more keys, those keys will appear here. 
                </HelperText>
            </Fragment>
        );
    }
}

export default withStyles(styles) (withTheme()(PossibleKeys));
