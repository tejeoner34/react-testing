import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useOrderDetails } from "../../contexts/OrderDetails";


export default function OrderConfirmation(props) {

    const [ , , resetOrder] = useOrderDetails();
    const [orderNumber, setOrderNumber] = useState(null);

    useEffect(() => {
        const options = {
            method: 'POST'
        }
        fetch('http://localhost:3030/order', options)
            .then(r => r.json())
            .then(d => setOrderNumber(d.orderNumber))
    }, [])

    return (
        <div>
            <h2>Your order is: {orderNumber}</h2>
            <Button
                onClick={() => {
                    props.setActualPage('Order Entry');
                    resetOrder();
                }}
                >Create another order
            </Button>
        </div>
    )
}