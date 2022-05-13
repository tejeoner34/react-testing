// en este archivo creamos el render method personalizado que nos permitirá hacer render con cualquier provider
// de esta manera evitamos tener que añadir el provider a todos los tests que se encuentren
// dentro de un componente que recibe info de un context

import { render } from "@testing-library/react";
import { OrderDetailsProvider } from "../contexts/OrderDetails";

const renderWithContext = (ui, options) => render(ui, {wrapper: OrderDetailsProvider, ...options});
// el ui se refiere a cualquier componente jsx que le pasemos
export * from '@testing-library/react';

export { renderWithContext as render }