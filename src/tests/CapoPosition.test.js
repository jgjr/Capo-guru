import React from 'react';
import ReactDOM from 'react-dom';
import { openSequence } from './Sequence';
import CapoPosition from '../components/CapoPosition';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CapoPosition fret={2} chords={openSequence.fullChords()} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
