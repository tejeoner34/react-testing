import { Col, Form, Row } from "react-bootstrap";

export default function ScoopOption({ name, imagePath, updateItemCount }) {

    const handleCount = (e) => {
        updateItemCount(name, e.target.value)
    }

    return (

        <Col xs={12} sx={6} md={4} lg={3} style={{ textAlign: 'center' }}>
            <img src={`http://localhost:3030${imagePath}`} alt={`${name} scoop`} />
            <Form.Group
                controlId={`${name}-count`}
                as={Row}
                style={{ marginTop: '10px' }}>
                <Form.Label column xs="8" style={{ textAlign: 'right' }}>
                    {name}
                </Form.Label>
                <Col xs="4" style={{ textAlign: 'left' }}>
                    <Form.Control
                        type="number" 
                        data-testid={`${name}-count`}
                        defaultValue={0}
                        onChange={handleCount} /></Col>
            </Form.Group>
        </Col>

    )
}