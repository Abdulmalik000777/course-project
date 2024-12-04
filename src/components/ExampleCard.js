import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ExampleCard = ({ title, text, onDelete }) => (
  <Card style={{ width: "18rem", margin: "1rem" }}>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
      <Button variant="danger" onClick={onDelete}>
        Delete
      </Button>
    </Card.Body>
  </Card>
);

export default ExampleCard;
