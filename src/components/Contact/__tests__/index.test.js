import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from "..";

afterEach(cleanup);

describe('Contact is rendering', () => {
    //baseline test
    it('renders', () => {
        render(<ContactForm />)
    });

    it('matches snapshot', () => {
        const { asFragment } = render(
            <ContactForm />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders title', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
        expect(getByTestId('button')).toHaveTextContent('Submit')
    })
});