import React, { Component } from 'react';
import { withTheme, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Switch from '@material-ui/core/Switch';
import Popup from './Popup';

const styles = theme => {
};

class Settings extends Component {

    handleClose() {
        this.props.close();
    }

    toggleChord(chord) {
        const openChords = this.props.openChords;
        let newChords = {};
        if (openChords.containsChord(chord)) {
            newChords = openChords.removeChord(chord);
        } else {
            newChords = openChords.addChord(chord);
        }
        this.props.replaceOpenChords(newChords);
    }

    render() {

        return (
            <Popup
                open={this.props.visible}
                handleClose={this.handleClose.bind(this)}
                title='Settings'
                intro="You might want to change the chords that are considered 'open'. Here you can toggle a few chords that are commonly played open, despite requiring a barre of some sort."
            >
                <FormControl component="fieldset">
                    <FormLabel component="legend">Open chords</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                            <Switch
                                checked={this.props.openChords.containsChord({num: 8, type: 'maj'})}
                                onChange={() => this.toggleChord({num: 8, type: 'maj'})}
                                value="F"
                            />
                            }
                            label="F major"
                        />
                        <FormControlLabel
                            control={
                            <Switch
                                checked={this.props.openChords.containsChord({num: 1, type: 'min'})}
                                onChange={() => this.toggleChord({num: 1, type: 'min'})}
                                value="Bb min"
                            />
                            }
                            label="Bb minor"
                        />
                        <FormControlLabel
                            control={
                            <Switch
                                checked={this.props.openChords.containsChord({num: 2, type: 'min'})}
                                onChange={() => this.toggleChord({num: 2, type: 'min'})}
                                value="Bmin"
                            />
                            }
                            label="B minor"
                        />
                    </FormGroup>
                </FormControl>
            </Popup>
        );
    }
}

export default withStyles(styles) (withTheme()(Settings));
