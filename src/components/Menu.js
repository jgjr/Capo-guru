import React, { Component } from 'react';
import { withTheme, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    Div: {
        flexGrow: 1,
    },
    Typography: {
        flex: 1,
    },
});

class Menu extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.Div}>
                <AppBar position="static" color={"primary"}>
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={classes.Typography}>
                            Capo.guru
                        </Typography>
                        <Button color="inherit" onClick={this.props.toggleSettings}>Settings</Button>
                        <Button color="inherit" onClick={this.props.toggleHelp}>{this.props.help ? 'Exit help' : 'Help' }</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles) (withTheme()(Menu));
