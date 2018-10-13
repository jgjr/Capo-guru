import React, { Component } from 'react';
import { withTheme, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    ChordName: {
        marginBottom: theme.spacing.unit,
        fontSize: '1.75em',
        textAlign: 'center',
    },
    img: {
        width: '100%',
        maxWidth: 200,
        display: 'block',
        margin: 'auto',
        maxHeight: '35vh',
    },
});

class ChordDiagram extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography variant="title" className={classes.ChordName}>{this.props.chord.string}</Typography>
                <img
                    className={classes.img}
                    src={"/static/chords/" + this.props.chord.string.replace(/#\//, '') + ".svg"}
                    alt={this.props.chord.string}
                />
            </div>
        );
    }
}

export default withStyles(styles) (withTheme()(ChordDiagram));
