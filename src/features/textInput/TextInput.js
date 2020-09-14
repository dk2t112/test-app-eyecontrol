import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setText,
  selectText,
} from './textInputSlice';
import { Row, Col, Card, Form } from 'react-bootstrap';
import './TextInput.scss';


function TextInput() {
  const text = useSelector(selectText);
  const dispatch = useDispatch();
  const handleChange = (event) => dispatch(setText(event.target.value));
  return (
    <Row className="justify-content-md-center">
      <Col xs lg="9">
        <Card>
          <Card.Header as="h5">Text to speak</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Control as="textarea"
                              rows="4"
                              placeholder="Please type text here..."
                              value={text}
                              onChange={handleChange} />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default TextInput;
