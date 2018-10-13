import React, { Component, Fragment  } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HelperTextButton from './HelperTextButton';

class HelperText extends Component {
    render() {
        return (
            <Fragment>
                {this.props.active ?
                    <Paper style={{zIndex: 20, marginTop: 5}}>
                        <Typography variant="body2">
                            {this.props.children}
                        </Typography>
                        <HelperTextButton action={this.props.action} text={this.props.button} />
                    </Paper>
                : null}
            </Fragment>
        );
    }
}

export default HelperText;
