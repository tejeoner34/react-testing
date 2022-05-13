import { render, screen, fireEvent } from "../../../test-utils/testing-library-utils";
import Options from "../Options";
import OrderEntry from "../OrderEntry";


test('update scoop subtotal when scoops change', async () => {
    render(<Options optionType='scoops' />);

    //make sure total starts out 0,00

    const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false });
    expect(scoopsSubtotal).toHaveTextContent('0.0');

    //update vanilla scoops to 1 and increase scoopsSubtotal

    const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' });
    fireEvent.change(vanillaInput, { target: { value: '1' } });
    expect(scoopsSubtotal).toHaveTextContent("Scoops total: $2.00");

    // update chocolate scoops to 2 and check subtotal

    const chocolateInput = await screen.findByRole('spinbutton', { name: 'Chocolate' });
    fireEvent.change(chocolateInput, { target: { value: '2' } });
    expect(scoopsSubtotal).toHaveTextContent('6.00');
})

test('update toppings subtotal when toppings get checked', async () => {
    render(<Options optionType="toppings" />);

    const toppingsSubtotal = screen.getByText('Toppings total: $', { exact: false });
    expect(toppingsSubtotal).toHaveTextContent('0.00');

    const cherriesCheck = await screen.findByRole('checkbox', { name: 'Cherries' });
    fireEvent.click(cherriesCheck);
    expect(toppingsSubtotal).toHaveTextContent('1.50')
});

describe('Grand Total', () => {
   
    test('Grand Total starts with $0.00', () => {
        render(<OrderEntry />);
        const grandTotal = screen.getByText('Grand Total: $', { exact: false });
        expect(grandTotal).toHaveTextContent('0.00');
    });
    test('Grand total increases when adding topping', async () => {
        render(<OrderEntry />);
        const grandTotal = screen.getByText('Grand Total: $', { exact: false });
        const cherriesCheck = await screen.findByRole('checkbox', { name: 'Cherries' });
        fireEvent.click(cherriesCheck);
        expect(grandTotal).toHaveTextContent('1.50');
    });
    test('Grand total increases when adding scoop', async () => {
        render(<OrderEntry />);
        const grandTotal = screen.getByText('Grand Total: $', { exact: false });
        const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' });
        fireEvent.change(vanillaInput, { target: { value: '1' } });
        expect(grandTotal).toHaveTextContent('2');
    })
})