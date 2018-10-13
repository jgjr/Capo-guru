import React from 'react';
import ReactDOM from 'react-dom';
import { openSequence } from './Sequence';
import CapoPositions from '../components/CapoPositions';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CapoPositions positions={openSequence.findOpenPositions()} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
