import { render, screen } from "../../../test-utils/testing-library-utils";
import Options from "../Options";

test('displays image for each scoop from the server', async () => {
    render(<Options optionType="scoops" />);
    
    // find images

    const images = await screen.findAllByRole('img', {name: /scoop$/i}); // regex que dice que scoop estará al final
    expect(images).toHaveLength(2);

    const altText = images.map(element => element.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('displays image for each topping from the server', async () => {
    render(<Options optionType='toppings' />);

    const images = await screen.findAllByRole('img', { name: /topping$/i});
    expect(images).toHaveLength(3);

    const altText = images.map(item => item.alt);
    expect(altText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping']);
})