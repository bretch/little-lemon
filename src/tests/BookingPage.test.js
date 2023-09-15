import { render, screen, act } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'
import BookingPage from '../pages/BookingPage';

test('Renders the BookingPage heading', async () => {
    await act( async () => render(<BookingPage />, { wrapper: BrowserRouter }));
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})