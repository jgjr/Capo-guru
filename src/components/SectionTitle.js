import React, { Component } from 'react';
import { withTheme, withStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import IconButton from '@material-ui/core/IconButton';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    Div: {
        display: 'flex',
        flexGrow: 1,
    },
    Typography: {
        flex: 1,
    },
    Button: {
        display: 'inline-flex',
        cursor: 'pointer',
        position: 'relative',
        top: -10,
        right: -10
    },
    Icon: {
        fontSize: 18,
        color: '#444444',
    }
});

class SectionTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleTooltipClose() {
        this.setState({ open: false });
    };

    handleTooltipOpen() {
        this.setState({ open: true });
    };


    content() {
        if (this.props.title) {
            return this.props.title;
        } else if (this.props.children) {
            return this.props.children;
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.Div}>
                <Typography variant="headline" component="h3" className={classes.Typography}>{this.content()}</Typography>
                <ClickAwayListener onClickAway={() => this.handleTooltipClose()}>
                    <div>
                        <Tooltip 
                            PopperProps={{
                                disablePortal: true,
                            }}
                            title={this.props.tooltip} 
                            placement="left"
                            onClose={() => this.handleTooltipClose()}
                            open={this.state.open}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                        >
                            <IconButton aria-label="Tip" className={classes.Button} onClick={() => this.handleTooltipOpen()}>
                                <HelpOutlineIcon className={classes.Icon} />     
                            </IconButton>
                        </Tooltip>
                    </div>
                </ClickAwayListener>
            </div>
        );
    }
}

export default withStyles(styles) (withTheme()(SectionTitle));
