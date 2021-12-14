import React from 'react';
// the render function will render the component as Jest creates a simulated DOM 
// the cleanup function is used to remove components from the DOM to prevent memory leaking or data collisions
import { render, cleanup } from '@testing-library/react';
// jest-dom offers access to custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// will make sure to clean slate after each test
afterEach(cleanup);

// the describe function will be used to declare the component
describe('About component', () => {
    // first test to verify component is rendering
    it('renders', () => {
        render(<About />);
    });

    // second test is a test case to compare snapshot versions of the DOM node structure
    it('matches snapshot DOM node structure', () => {
        // render about; the asFragment function returns a snapshot of the about component
        const { asFragment } = render(<About />);
        // test and compare that the expected & actual outcomes match
        expect(asFragment()).toMatchSnapshot();
    })
})