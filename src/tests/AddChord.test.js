import React from 'react';
import ReactDOM from 'react-dom';
import AddChord from '../components/AddChord';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddChord />, div);
    ReactDOM.unmountComponentAtNode(div);
});


