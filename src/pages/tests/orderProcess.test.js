import { screen, render, fireEvent } from "@testing-library/react";
import App from "../../App";

test('Happy path', async () => {
    render(<App />);

    //entry order page
    const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false });
    expect(scoopsSubtotal).toHaveTextContent('0.0');

    const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' });
    fireEvent.change(vanillaInput, { target: { value: '1' } });
    expect(scoopsSubtotal).toHaveTextContent("Scoops total: $2.00");

    const chocolateInput = await screen.findByRole('spinbutton', { name: 'Chocolate' });
    fireEvent.change(chocolateInput, { target: { value: '2' } });
    expect(scoopsSubtotal).toHaveTextContent('6.00');

    const toppingsSubtotal = screen.getByText('Toppings total: $', { exact: false });
    expect(toppingsSubtotal).toHaveTextContent('0.00');

    const cherriesCheck = await screen.findByRole('checkbox', { name: 'Cherries' });
    fireEvent.click(cherriesCheck);
    expect(toppingsSubtotal).toHaveTextContent('1.50')

    const grandTotal = screen.getByText('Grand Total: $', { exact: false });
    expect(grandTotal).toHaveTextContent('7.50');

    // click on order sunday button and move to next stage

    const orderSundaeButton = screen.getByRole('button', { name: 'Order Sundae!' });
    fireEvent.click(orderSundaeButton);

    // summary page 

    const vanillaOption = screen.getByText('1 Vanilla');
    expect(vanillaOption).toBeInTheDocument();
    const chocolateOption = screen.getByText('2 Chocolate');
    expect(chocolateOption).toBeInTheDocument();

    const checkbox = screen.getByRole('checkbox', { name: 'I accept conditions' });
    const acceptButton = screen.getByRole('button', { name: 'Send' });

    fireEvent.click(checkbox);
    fireEvent.click(acceptButton);

    // confirmaion page

    const orderNumber = await screen.findByText('Your order is: 10000000000');
    expect(orderNumber).toBeInTheDocument();

})