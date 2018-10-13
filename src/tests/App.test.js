import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme'
import App from '../components/App';
import { capoSequence } from './Sequence';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('displays welcome text', () => {
    const app = mount(<App />);
    expect(app.contains('Intro')).toEqual(true);
});

it("doesn't display welcome text second time", () => {
    const app = mount(<App />);
    app.setState({visited: true});
    expect(app.contains('Intro')).toEqual(false);
    expect(app.contains('Add a chord above')).toEqual(true);
});

it('only displays add chord and original chord sections when sequence empty', () => {
    const app = mount(<App />);
    app.setState({visited: true});
    expect(app.contains('Add a chord above')).toEqual(true);
    expect(app.contains('Possible position')).toEqual(false);
    expect(app.contains('Possible key')).toEqual(false);
});

it('displays all boxes when sequence contains chords', () => {
    const app = mount(<App />);
    app.setState({sequence: capoSequence});
    expect(app.contains('Original chords')).toEqual(true);
    expect(app.contains('Possible position')).toEqual(true);
    expect(app.contains('Possible key')).toEqual(true);
});

it('gets sequence from localStorage', () => {
    localStorage.setItem('sequence', JSON.stringify(capoSequence.chords));
    const app = mount(<App />);
    expect(app.contains('A min')).toEqual(true);
    expect(app.contains('E min')).toEqual(true);
});
