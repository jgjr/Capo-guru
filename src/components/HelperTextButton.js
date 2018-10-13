import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class HelperTextButton extends Component {
    render() {
        return (
            <Button 
                variant="contained" 
                color="primary" 
                style={{marginTop: 10, display: 'block'}}
                onClick={this.props.action} 
            >
                {this.props.text}
            </Button>                 
        );
    }
}

export default HelperTextButton;
