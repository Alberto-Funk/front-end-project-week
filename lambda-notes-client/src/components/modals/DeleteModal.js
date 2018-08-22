import React from 'react';
import styled from "react-emotion";

const Container = styled("div")`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;

const Opacity = styled("div")`
  background: rgba(215, 215, 215, .8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled("div")`
  position: relative;
  width: 718px;
  height: 242px;
  background: white;
  border: 1px solid black;
  z-index: 30;
  text-align: center;
  margin-bottom: 240px;
  margin-right: 20px;

  p {
    font-size: 1.8rem;
    margin-top: 53px;
  }
  div {
    display: flex;
    justify-content: center;
   
    button {
      display: flex;
      margin-top: 38px;
      padding: 18px;
      width: 250px;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: white;
      font-size: 2rem;
      font-weight: bold;
      background-color: #2AC0C4;
      border: solid 1px #939797;
    }
    .first {
      margin-right: 20px;
      background-color: red;
    }
  }
`;


const DeleteModal = props => {

  const handleDelete = () => {
    props.history.goBack();
    props.deleteNote(props.id)
    props.handleModal()
  }

  const handleClose = () => props.handleModal()

  return (
    <Container>
      <Opacity onClick={() => handleClose()}></Opacity>
        <Modal>
          <p>Are you sure you want to delete this?</p>
          <div>
            <button className="first" onClick={() => handleDelete()}>Delete</button>
            <button className="last" onClick={() => handleClose()}>No</button>
          </div>
        </Modal>
    </Container>
  );
}

export default DeleteModal;