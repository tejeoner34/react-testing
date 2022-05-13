import { Alert } from "react-bootstrap";

export default function AlertBanner({ message, variant }){

    const alertMessage = message || 'Something happened, try again later';

    const alertVariant = variant || 'danger';

    return(
        <Alert variant={alertVariant}>
            {alertMessage}
        </Alert>
    )
}