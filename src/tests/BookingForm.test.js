import { fireEvent, render, screen, act, within } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import BookingForm from './../components/BoookingForm';
import { getToday } from './../utils'

const today = getToday()
const availableTimes = {
    [today]: ['10:00', '13:00']
}
const handleChangeDate = jest.fn()
const handleSubmitForm = jest.fn()

jest.useFakeTimers();

describe('BookingForm', () => {
    beforeEach(async () => {
        handleSubmitForm.mockClear();
        await act( async () => render(<BookingForm
                today={today}
                availableTimes={availableTimes}
                onChangeDate={handleChangeDate}
                onSubmitForm={handleSubmitForm}
                />, { wrapper: BrowserRouter }));
    })

    test(`Renders all field labels`, () => {
        ['Date', 'Time', 'Number of Guests', 'Occasion'].forEach(fieldName => {
            const fieldLabel = screen.getByText(fieldName);
            expect(fieldLabel).toBeInTheDocument();
        })
    })

    test('Date element has correct attributes', () => {
        const input = screen.getByTestId('date-input')
        expect(input).toHaveValue(today)
        expect(input).toHaveAttribute('type', 'date')
        expect(input).toHaveAttribute('min', today)
    })


    describe('Time element', () => {
        let input;

        beforeEach(() => {
            input = screen.getByTestId('time-input')
        })

        test('default option is selected', () => {
            expect(within(input).getByRole('option', { name: 'Select Time' }).selected).toBe(true)
        })

        test('should render correct number of options', () => {
            expect(within(input).getAllByRole('option').length).toBe(availableTimes[today].length + 1)
        })
    })

    test('Number of Guests element has correct attributes', () => {
        const input = screen.getByTestId('guests-input')
        expect(input).toHaveValue('2') // default value
        expect(input).toHaveAttribute('type', 'text')
        expect(input).toHaveAttribute('aria-valuemin', '1')
        expect(input).toHaveAttribute('aria-valuemax', '10')
    })

    describe('Occasion element', () => {
        let input;

        beforeEach(() => {
            input = screen.getByTestId('occasion-input')
        })

        test('default option is selected', () => {
            expect(within(input).getByRole('option', { name: 'Select an Occasion' }).selected).toBe(true)
        })

        test('should render correct number of options', () => {
            expect(within(input).getAllByRole('option').length).toBe(3) // 'Select an Occasion', Birthday, Anniversary
        })
    })

    test('User is not able to submit the form if at least one required field is not fulfilled', async () => {
        act(() => {
            const button = screen.getByRole('button')
            fireEvent.click(button)
        })
        await screen.findByText('Please select available time.')
    })

    test('User is able to submit the form if all required fields are answered', async () => {
        const formData = {
            date: today,
            time: '10:00',
            guests: 2,
            occasion: 'Birthday'
        }
        await act(() => {
            userEvent.selectOptions(
                screen.getByTestId('time-input'),
                screen.getByRole('option', { name: formData.time }),
              )
              userEvent.selectOptions(
                screen.getByTestId('occasion-input'),
                screen.getByRole('option', { name: formData.occasion }),
              )
        })
        expect(screen.getByRole('option', { name: formData.time }).selected).toBe(true)
        expect(screen.getByRole('option', { name: formData.occasion }).selected).toBe(true)
        expect(screen.getByTestId('date-input')).toHaveValue(formData.date)
        expect(screen.getByTestId('guests-input')).toHaveValue(formData.guests.toString())


        const button = screen.getByRole('button')
        await act(() => fireEvent.click(button) )
        // Assert that loading state has been set to true
        await expect(button).toHaveTextContent('Submitting')
        await act(() => jest.runAllTimers())
        expect(handleSubmitForm).toHaveBeenCalledTimes(1)
        expect(handleSubmitForm).toHaveBeenCalledWith(formData)
    })
})