import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Search from './index.js';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Search/>, div);
});

it('renders without crashing - shallow', () => {
    shallow(<Search/>);
});
