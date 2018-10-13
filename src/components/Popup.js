import React, { Component } from 'react';
import { withTheme, withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    Title: {
        marginBottom: theme.spacing.unit * 2,
        fontSize: '1.5em',
    },
    Paragraph: {
        marginBottom: theme.spacing.unit * 2,
    },
    Close: {
        position: 'absolute',
        color: '#444444',
        top: 5,
        right: 5,
        cursor: 'pointer'
    },
});

const modalInnerStyle = {
    backgroundColor: '#ffffff',
    border: 'none',
    outline: 'none',
    padding: 24,
    width: '90%',
    maxWidth: 500,
    position: 'relative'
};

class Popup extends Component {

    render() {
        const { classes } = this.props;

        return (
            <Modal
                open={this.props.open}
                onClose={this.props.handleClose}
            >
                <div style={modalInnerStyle}>
                    <CloseIcon className={classes.Close} onClick={this.props.handleClose} /> 
                    <Typography variant="title" className={classes.Title}>{this.props.title}</Typography>
                    <Typography variant="body1" className={classes.Paragraph}>{this.props.intro}</Typography>
                    {this.props.children}
                </div>
            </Modal>
        );
    }
}

export default withStyles(styles) (withTheme()(Popup));
