import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

const AdminUserPage = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [userStates, setUserStates] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (idUser) => {
    setShow(true);
    const userFind = users.find((user) => user._id === idUser);
    setUserStates(userFind);
  };

  const getAllUsers = async () => {
    const getUsers = await fetch("http://localhost:3001/api/users");
    const data = await getUsers.json();
    setUsers(data.getAllUsers);
  };

  const handleChange = (ev) => {
    setUserStates({ ...userStates, [ev.target.name]: ev.target.value });
  };

  const handleClick = async (ev) => {
    ev.preventDefault();

    const updateUser = await fetch(
      `http://localhost:3001/api/users/${userStates._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          nombreUsuario: userStates.nombreUsuario,
          email: userStates.emailUsuario,
          role: userStates.role,
        }),
      }
    );

    const data = await updateUser.json();
    if (data) {
      handleClose();
      Swal.fire({
        title: "Usuario Actualizado exitosamente!",
        icon: "success",
      });
    }
  };

  const deleteUser = async (idUser) => {
    const confirmDeleteUser = confirm(
      "Estas seguro de que quieres eliminar este Usuario?"
    );
    if (confirmDeleteUser) {
      const delUser = await fetch(`http://localhost:3001/api/users/${idUser}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      });
      const data = await delUser.json();
      if (data) {
        Swal.fire({
          title: "Usuario eliminado exitosamente!",
          icon: "success",
        });
      }
    }
  };

  useEffect(() => {
    getAllUsers();
  }, [users]);

  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <Table striped bordered hover className="75">
          <thead>
            <tr>
              <th>Nombre del Usuario</th>
              <th>Correo Electronico</th>
              <th>Role del Usuario</th>
              <th>Editar/Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.nombreUsuario}</td>
                <td>{user.emailUsuario}</td>
                <td>{user.role}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => handleShow(user._id)}
                  >
                    Editar
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Editar Usuarios</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Nombre</Form.Label>
                          <Form.Control
                            type="text"
                            name="nombreUsuario"
                            value={userStates.nombreUsuario}
                            onChange={handleChange}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="text"
                            name="emailUsuario"
                            value={userStates.emailUsuario}
                            onChange={handleChange}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Role</Form.Label>
                          <Form.Control
                            type="text"
                            value={userStates.role}
                            name="role"
                            onChange={handleChange}
                          />
                        </Form.Group>

                        <Button
                          variant="success "
                          type="submit"
                          onClick={handleClick}
                        >
                          Guardar
                        </Button>
                      </Form>
                    </Modal.Body>
                  </Modal>
                  <Button
                    variant="danger"
                    className={user.role === "admin" && "d-none"}
                    onClick={() => deleteUser(user._id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AdminUserPage;
