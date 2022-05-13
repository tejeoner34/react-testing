import { Button } from "react-bootstrap";
import Options from "./Options";
import { useOrderDetails } from "../../contexts/OrderDetails";


export default function OrderEntry(props){

    const [orderDetails] = useOrderDetails();

    return(
        <div>
             <Options  optionType='scoops'/>
             <Options  optionType='toppings'/>
             <div>
                 <h2>Grand Total: {orderDetails.totals.grandTotal}</h2>
                 <Button onClick={() => props.setActualPage('Order Summary')}>Order Sundae!</Button>
             </div>
        </div>
    )
}