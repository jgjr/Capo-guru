import React, { Fragment, Component } from 'react';
import { Sequence, defaultOpenChords } from 'guitar-chord-sequence';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../styles/App.css';
import AddChord from './AddChord';
import CapoPositions from './CapoPositions';
import CustomTheme from './Theme';
import Helper from './Helper';
import Menu from './Menu';
import OriginalChords from './OriginalChords';
import PossibleKeys from './PossibleKeys';
import Settings from './Settings';


class App extends Component {

    constructor(props) {
        super(props);
        let sequence = new Sequence([]);
        let visited = false;
        if (localStorage.getItem('sequence') != null) {
            visited = true;
            try {
                sequence = new Sequence(JSON.parse(localStorage.getItem('sequence')));
            } catch(e) {
                localStorage.setItem('sequence', JSON.stringify(sequence.chords));
            }
        }
        let openChords = new Sequence(defaultOpenChords);
        if (localStorage.getItem('openChords') != null) {
            visited = true;
            try {
                openChords = new Sequence(JSON.parse(localStorage.getItem('openChords')));
            } catch(e) {
                localStorage.setItem('openChords', JSON.stringify(sequence.chords));
            }
        }
        this.state = {
            sequence: sequence,
            openChords: openChords,
            help: false,
            visited: visited,
            helperStep: 0,
            settings: false
        }
    }

    updateSequence(sequence) {
        localStorage.setItem('sequence', JSON.stringify(sequence.chords));
        this.setState(
            {sequence: sequence}
        );
    }

    updateOpenChords(sequence) {
        localStorage.setItem('openChords', JSON.stringify(sequence.chords));
        this.setState(
            {openChords: sequence}
        );
    }

    addChord(chord) {
        this.updateSequence(this.state.sequence.addChord(chord));
    }

    removeChord(index) {
        this.updateSequence(this.state.sequence.removeChordByIndex(index));
    }

    clearChords() {
        this.updateSequence(new Sequence([]));
    }

    toggleHelp() {
        if (!this.state.help && !this.state.sequence.chords.length) {
            this.updateSequence(new Sequence([
                    {root: 'C', type: 'maj'},
                    {root: 'A', type: 'min'},
                    {root: 'F', type: 'maj'},
                    {root: 'G', type: 'maj'},
                ])
            );
        }
        this.setState({
            help: !this.state.help,
            visited: true,
            helperStep: 0
        });
    }

    changeHelperStep(index) {
        this.setState({helperStep: index});
    }

    toggleSettings() {
        this.setState({
            settings: !this.state.settings,
        });
    }

    render() {
        return (
            <Fragment>
                <MuiThemeProvider theme={CustomTheme}>
                    <CssBaseline />
                    <Menu toggleHelp={() => this.toggleHelp()} help={this.state.help} toggleSettings={() => this.toggleSettings()}/>
                    <div className="main-content">
                        <Helper 
                            active={this.state.help} 
                            toggleHelp={() => this.toggleHelp()} 
                            sequenceLength={this.state.sequence.chords.length} 
                            visited={this.state.visited}
                            step={this.state.helperStep}
                            changeStep={(index) => this.changeHelperStep(index)}
                        >
                            <AddChord 
                                add={(chord) => this.addChord(chord)} 
                                clear={() => this.clearChords()} 
                                sequenceCount={this.state.sequence.chords.length}
                                helperIndex={0}
                            />
                            <OriginalChords 
                                chords={this.state.sequence.fullChords()} 
                                alreadyOpen={this.state.sequence.isOpen(this.state.openChords)}
                                removeChord={(index) => this.removeChord(index)}
                                helperIndex={1}
                            />
                            <CapoPositions positions={this.state.sequence.findOpenPositions(this.state.openChords)} helperIndex={2} />
                            <PossibleKeys keys={this.state.sequence.findKeys()} helperIndex={3} />
                        </Helper>
                        <Settings 
                            visible={this.state.settings} 
                            close={() => this.toggleSettings()} 
                            openChords={this.state.openChords}
                            replaceOpenChords={(sequence) => this.updateOpenChords(sequence)}
                        />
                    </div>
                </MuiThemeProvider>
            </Fragment>
        );
    }
}

export default App;
