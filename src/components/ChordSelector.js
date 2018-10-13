import React, { Component } from 'react';
import { withTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class ChordSelector extends Component {
    render() {
        return (
            <FormControl>
                <InputLabel htmlFor="chord-input">Chord</InputLabel>
                <Select 
                    value={this.props.chord}
                    onChange={this.props.onChange}
                    inputProps={{
                        name: 'chord',
                        id: 'chord-input',
                    }}
                >
                    <MenuItem value={0}>A</MenuItem>
                    <MenuItem value={1}>A#/Bb</MenuItem>
                    <MenuItem value={2}>B</MenuItem>
                    <MenuItem value={3}>C</MenuItem>
                    <MenuItem value={4}>C#/Db</MenuItem>
                    <MenuItem value={5}>D</MenuItem>
                    <MenuItem value={6}>D#/Eb</MenuItem>
                    <MenuItem value={7}>E</MenuItem>
                    <MenuItem value={8}>F</MenuItem>
                    <MenuItem value={9}>F#/Gb</MenuItem>
                    <MenuItem value={10}>G</MenuItem>
                    <MenuItem value={11}>G#/Ab</MenuItem>
                </Select>
            </FormControl>
        );
    }
}

export default withTheme() (ChordSelector);
