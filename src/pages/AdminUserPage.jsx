import React, { useCallback, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import clienteAxios, { configHeaders } from "../helpers/clientAxios";
import '../css/AdminUserPage.css'

const AdminUserPage = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userStates, setUserStates] = useState({});
  const [editingUserId, setEditingUserId] = useState(null);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setEditingUserId(null);
  }, []);

  const handleShow = useCallback((idUser) => {
    setShowModal(true);
    setEditingUserId(idUser);
    const userFind = users.find((user) => user._id === idUser);
    setUserStates(userFind);
  }, [users]);

  const getAllUsers = useCallback(async () => {
    try {
      const getUsers = await clienteAxios.get("/users", configHeaders());
      setUsers(getUsers.data.getAllUsers);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tus usuarios no pueden ser cargados!",
      });
    }
  }, []);

  const handleChange = (ev) => {
    setUserStates({ ...userStates, [ev.target.name]: ev.target.value });
  };

  const handleClick = async (ev) => {
    try {
      ev.preventDefault();
      const updateProd = await clienteAxios.put(
        `/users/${userStates._id}`,
        {
          nombreUsuario: userStates.nombreUsuario,
          emailUsuario: userStates.emailUsuario,
          role: userStates.role,
        },
        configHeaders()
      );
      if (updateProd.status === 200) {
        const updatedUsers = users.map((user) =>
          user._id === userStates._id ? { ...user, ...userStates } : user
        );
        setUsers(updatedUsers);

        handleClose();
        Swal.fire({
          title: "Usuario Actualizado exitosamente!",
          icon: "success",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tus usuarios no pueden ser actualizados!",
      });
    }
  };

  const deleteUser = async (idUser) => {
    try {
      Swal.fire({
        title: "Estas seguro de que quieres eliminar este usuario?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, estoy seguro!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const delUser = await clienteAxios.delete(
            `/users/${idUser}`,
            configHeaders()
          );
          if (delUser.status === 200) {
            const updatedUsers = users.filter((user) => user._id !== idUser);
            setUsers(updatedUsers);

            handleClose();
            Swal.fire({
              title: "Usuario eliminado exitosamente!",
              icon: "success",
            });
          }
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tus usuarios no pueden ser eliminados!",
      });
    }
  };

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  return (
    <>
      <div className="main-container d-flex justify-content-center mt-3">
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

      <Modal show={showModal} onHide={handleClose}>
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
                value={userStates.nombreUsuario || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="emailUsuario"
                value={userStates.emailUsuario || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                value={userStates.role || ""}
                name="role"
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              variant="success"
              type="submit"
              onClick={handleClick}
            >
              Guardar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AdminUserPage;
