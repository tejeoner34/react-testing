import { useState } from "react"
import { Form, Button, OverlayTrigger, Popover } from "react-bootstrap";


export default function SummaryForm(props) {

    const [isDisabled, setIsDisabled] = useState(true);

    const popup = (
        <Popover id="popover-basic">
            <Popover.Body>
                no ice cream will actually be delivered
            </Popover.Body>
        </Popover>
    )

    const checkboxLabel = (
        <OverlayTrigger
            placement="right"
            delay={{hide: 400 }}
            overlay={popup}
            trigger={["hover", "focus"]}>
            <span>
                I accept <span data-testid="span-blue" style={{ color: 'blue' }}>conditions</span>
            </span>
        </OverlayTrigger>

    )

    

    const handleCheck = () => {
        setIsDisabled(!isDisabled);
    }

    return (
        <Form>
            <Form.Group>
                    <Form.Check
                        onChange={handleCheck}
                        checked={!isDisabled}
                        type="checkbox" id="accept-conditions"
                        label={checkboxLabel} />
            </Form.Group>
            <Button 
                disabled={isDisabled} 
                type="button" 
                onClick={()=> props.setActualPage('Thank You')}>Send</Button>
        </Form>
    )
}