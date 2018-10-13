import React, { Component } from 'react';
import { withTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class ChordTypeSelector extends Component {

    chordName(type) {
        return type;
    }

    render() {
        return (
            <FormControl>
                <InputLabel htmlFor="type-input">Type</InputLabel>
                <Select 
                    value={this.props.type}
                    onChange={this.props.onChange}
                    inputProps={{
                        name: 'type',
                        id: 'type-input',
                    }}
                >
                    <MenuItem value={'maj'}>{this.chordName('Major')}</MenuItem>
                    <MenuItem value={'min'}>{this.chordName('Minor')}</MenuItem>
                    <MenuItem value={'7'}>{this.chordName('7')}</MenuItem>
                    <MenuItem value={'min7'}>{this.chordName('Min7')}</MenuItem>
                    <MenuItem value={'maj7'}>{this.chordName('Maj7')}</MenuItem>
                </Select>
            </FormControl>
        );
    }
}

export default withTheme() (ChordTypeSelector);
