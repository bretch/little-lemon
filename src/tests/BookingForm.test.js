import { render, screen } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'
import BookingForm from './../components/BoookingForm';

beforeAll(() => {
    render(<BookingForm availableTimes={[]} onChangeDate={() => {}} />, { wrapper: BrowserRouter});
})

test(`Renders all field labels`, () => {
    ['Date', 'Time', 'Number of Guests', 'Occasion'].forEach(fieldName => {
        const fieldLabel= screen.getByText(fieldName);
        expect(fieldLabel).toBeInTheDocument();
    })
})

// @TODO: test form interactions