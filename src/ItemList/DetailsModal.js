import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function DetailsModal({ data }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" onClick={handleShow}>
        {data.name}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Source</h4>
          {data.source}
          <h4>Comments</h4>
          {data.comments}
          <h4>Instructions</h4>
          {data.instructions}
          <ul>
            <li>calories: {data.calories}</li>
            <li>fat: {data.fat}</li>
            <li>satfat: {data.satfat}</li>
            <li>carbs: {data.carbs}</li>
            <li>fiber: {data.fiber}</li>
            <li>sugar: {data.sugar}</li>
            <li>protein: {data.protein}</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DetailsModal