import { useOrderDetails } from "../../contexts/OrderDetails";
import SummaryForm from "./SummaryForm";

export default function OrderSummary(props) {

    const [orderDetails] = useOrderDetails();
    const scoops = [...orderDetails.scoops.entries()].map(([key, value]) =>
        <p key={key}>{`${value} ${key}`}</p>
    )
    const toppings = [...orderDetails.toppings.keys()].map(topping =>
        <p key={topping}>{`${orderDetails.toppings.get(topping)} ${topping}`}</p>
    )

    return (
        <div>
            <h1>Order Summary</h1>
            <div>
                <h2>Scoops</h2>
                {scoops}
            </div>
            <div>
                <h2>Toppings</h2>
                {toppings}
            </div>
            <SummaryForm setActualPage={props.setActualPage}></SummaryForm>
        </div>
    )
}