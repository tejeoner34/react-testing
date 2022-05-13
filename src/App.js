import './App.css';
import OrderEntry from './pages/entry/OrderEntry';
import { OrderDetailsProvider } from './contexts/OrderDetails'
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import OrderSummary from './pages/summary/OrderSummary';
import OrderConfirmation from './pages/confirmation/OrderConfirmation';

function App() {

    const [actualPage, setActualPage] = useState('Order Entry');

    let PageInView = OrderSummary;

    switch (actualPage) {
        case 'Order Entry':
            PageInView = OrderEntry
            break;
        case 'Order Summary':
            PageInView = OrderSummary
            break;
        case 'Thank You':
            PageInView = OrderConfirmation;
            break;
        default:
    }

    return (
        <>
            <Container>
                <OrderDetailsProvider>
                    {<PageInView setActualPage={setActualPage}/>}
                </OrderDetailsProvider>
            </Container>
        </>
    );
}

export default App;
