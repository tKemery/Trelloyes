import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List component', () => {
    it ('renders without crashing', () => {
        const section = document.createElement('section');
        ReactDOM.render(<List />, section);
        ReactDOM.unmountComponentAtNode(section);
    });

    it ('renders the UI as expected', () => {
        const tree = renderer
            .create(<List className="List" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})
