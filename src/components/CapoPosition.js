import React, { Component } from 'react';
import { withTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ChordChip from './ChordChip';
import ChordsModal from './ChordsModal';

const styles = {
    Fret: {
        fontSize: '1.2em', 
        marginLeft: 5, 
        marginRight: 20,
        display: 'block',
    },
    Chip: {
        position: 'relative',
        top: 3,
        cursor: 'inherit'
    },
    ListItem: {
        flexWrap: 'wrap',
    },
};

class CapoPosition extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
        }
    }

    openModal() {
        this.setState({
            modalOpen: true,
        });
    }

    closeModal() {
        this.setState({
            modalOpen: false,
        });
    }

    render() {
        return (
            <div>
                <ListItem button onClick={this.openModal.bind(this)} style={styles.ListItem}>
                    <span style={styles.Fret}>Fret {this.props.fret}</span>
                    {this.props.chords.map((chord, index) => (<ChordChip chord={chord} style={styles.Chip} key={index} />))}
                </ListItem>
                <ChordsModal open={this.state.modalOpen} close={this.closeModal.bind(this)} chords={this.props.chords} fret={this.props.fret} />
            </div>
        );
    }
}

export default withTheme()(CapoPosition);
