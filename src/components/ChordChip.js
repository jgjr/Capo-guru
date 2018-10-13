import React, { Component } from 'react';
import { withTheme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

class ChordChip extends Component {
    render() {
        if (this.props.removable) {
            return (
                <Chip
                    label={this.props.chord.string}
                    onDelete={this.props.onClick}
                    style={this.props.style}
                />
            );
        } else {
            return (
                <Chip
                    label={this.props.chord.string}
                    style={this.props.style}
                />
            )
        }
    }
}

export default withTheme() (ChordChip);
