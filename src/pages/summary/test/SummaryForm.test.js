import { render, screen, fireEvent, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";


describe('checkbox tests', () => {
    test('checkbox is uncheked by default', () => {
        render(<SummaryForm />);
        const checkbox = screen.getByRole('checkbox', {name: 'I accept conditions'});
        expect(checkbox).not.toBeChecked();

    });
    test('checkbox enables and disables the button', () => {
        render(<SummaryForm />)
        const checkbox = screen.getByRole('checkbox', {name: 'I accept conditions'});
        const acceptButton = screen.getByRole('button', {name: 'Send'});

        expect(acceptButton).toBeDisabled();

        // click

        fireEvent.click(checkbox);
        expect(acceptButton).toBeEnabled();
    });
    test('if popover appears and disappears on hover', async () => {
        render(<SummaryForm />)
        const popup = screen.queryByText(/no ice cream will actually be delivered/i);
        expect(popup).not.toBeInTheDocument();

        const acceptConditionsLabel = screen.getByText('conditions');
        expect(acceptConditionsLabel).toBeInTheDocument();

        //hover

        userEvent.hover(acceptConditionsLabel);
        await waitFor(() => {
            expect(screen.getByText(/no ice cream will actually be delivered/i)).toBeInTheDocument();
        })

        //unhover

        userEvent.unhover(acceptConditionsLabel);
        await waitForElementToBeRemoved(() => 
            screen.queryByText(/no ice cream will actually be delivered/i)
        )

    })
})