import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row } from "../../types/RowItem.types";
import { useState } from "react";

type Props = {
  selectedItem: Row;
  handleEdit: (data: Row) => void;
};
export const CustomModal = (props: Props) => {
  const [formData, setFormData] = useState({
    email: props.selectedItem?.email,
    name: {
      first: props.selectedItem?.name?.first,
      last: props.selectedItem?.name?.last,
    },
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handeSubmit = (e: any): void => {
    e.preventDefault();
    const newUser = {
      ...props.selectedItem,
      ...formData,
    };
    props.handleEdit(newUser);
    handleClose();
  };
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="edit" onSubmit={handeSubmit}>
            {/* First Name */}
            <Form.Group className="mb-3" controlId="firstname">
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                value={formData.name.first}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: { ...formData.name, first: e.target.value },
                  })
                }
              />
            </Form.Group>

            {/* Last Name */}
            <Form.Group className="mb-3" controlId="firstname">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                value={formData.name.last}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: { ...formData.name, last: e.target.value },
                  })
                }
              />
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button className="btn btn-primary" form="edit">
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
