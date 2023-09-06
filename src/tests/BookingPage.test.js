import { render, screen } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'
import BookingPage from '../pages/BookingPage';

test('Renders the BookingPage heading', () => {
    render(<BookingPage availableTimes={[]} />, { wrapper: BrowserRouter});
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})