import React, { Component, Fragment } from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import ChordSelector from './ChordSelector';
import ChordTypeSelector from './ChordTypeSelector';
import HelperText from './HelperText';
import Section from './Section';
import SectionTitle from './SectionTitle';

const styles = theme => ({
    Button: {
        [theme.breakpoints.up('md')]: {
            position: 'relative',
            top: 12,
        }
    },
    ClearButton: {
        backgroundColor: '#656565',
        color: '#ffffff'
    },
});

class AddChord extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chord: '',
            type: ''
        }
    }

    addChord() {
        if (this.state.chord !== '' && this.state.type !== '') {
            this.props.add({num: this.state.chord, type: this.state.type});
            this.setState({
                chord: '',
                type: ''
            });
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Section helperActive={this.props.helperActive}>
                    <SectionTitle title="Add a chord" tooltip="Remember, 'A' = 'A major'" />
                    <Grid container spacing={24}>
                        <Grid item xs={12} md={3}>
                            <ChordSelector 
                                onChange={this.handleChange.bind(this)}
                                chord={this.state.chord}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <ChordTypeSelector 
                                onChange={this.handleChange.bind(this)}
                                type={this.state.type}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <FormControl>
                                <Button 
                                    variant="contained" 
                                    color="secondary" 
                                    onClick={() => this.addChord()} 
                                    disabled={!(this.state.chord !== '' && this.state.type)}
                                    className={classes.Button}
                                >
                                    Add
                                </Button>                 
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <FormControl>
                                <Button 
                                    variant="contained" 
                                    color="default" 
                                    onClick={() => this.props.clear()} 
                                    disabled={!(this.props.sequenceCount)}
                                    className={`${classes.Button} ${classes.ClearButton}`}
                                >
                                    Clear all
                                </Button>                 
                            </FormControl>
                        </Grid>
                    </Grid>
                </Section>
                <HelperText active={this.props.helperActive} button="Next" action={() => this.props.changeStep(1)}>
                    We are going to input a chord sequence one chord at a time. You can add your chords here. First select the root of the chord, then the type (for example, an 'A' chord will be 'A' and then 'Major', a 'D# Minor 7' chord will be 'D#/Eb' and then 'Min7'), then click 'Add'. To remove all your chords click 'Clear all'.
                </HelperText>
            </Fragment>
        );
    }
}

export default withStyles(styles) (withTheme()(AddChord));
