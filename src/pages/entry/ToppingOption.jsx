import { Col, Form } from "react-bootstrap";


export default function ToppingOption({ name, imagePath, updateItemCount }){


    const handleCheck = (e) =>{
        if(e.target.checked){
            updateItemCount(name, 1)
        }else{
            updateItemCount(name, 0)
        }
    }
    
    return(
        <Col xs={12} sx={6} md={4} lg={3} style={{textAlign: 'center'}}>
                <img src={`http://localhost:3030${imagePath}`} alt={`${name} topping`} />
                <Form.Group controlId={`${name}-topping-checkbox`}>
                    <Form.Check type="checkbox" onClick={handleCheck} label={name} />
                </Form.Group>
        </Col>
    )
}