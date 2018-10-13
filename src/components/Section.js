import React, { Component  } from 'react';
import { withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

class Section extends Component {

    render() {
        return (
            <Paper style={this.props.helperActive ? {zIndex:20} : {}}>
                {this.props.children}
            </Paper>
        );
    }
}

export default withTheme()(Section);
