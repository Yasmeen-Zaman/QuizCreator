import React, { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap'

function AddChoice() {
    const [pop, setPop] = useState(false);

    const handleHide = () => setPop(false);
    const handlePop = () => setPop(true);
    return (
        <Modal show={pop} onHide={handleHide}>
            <Modal.Header closeButton>
                <h1>Choice</h1>
            </Modal.Header>
            <Modal.Body>
                <Form.Control as="textarea" rows={3} placeholder="Add Option" />
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Correct Option" />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleHide}>Cancel</Button>
                <Button variant="primary" onClick={handleHide}>Add Choice</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddChoice;
