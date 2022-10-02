import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  ModalOverlay,
  useDisclosure,
  Button,
  ModalContent,
  Modal,
  Text,
  ModalHeader,
} from "@chakra-ui/react";
import axios from "../../instance";
import cors from "cors";

function ModalForm(props) {
  const [task, setTask] = useState("");
  const params = useParams();
  const projectCompany = params.projectId;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (e) => {
    console.log(e.target.value);
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let userId = localStorage.getItem("userId");
    let data = {
      task,
      company: projectCompany,
      userId,
    };

    axios
      .post("/task", data, cors())
      .then((res) => {
        console.log(res.data);
        res.data.status === 200
          ? window.location.reload()
          : console.log(res.data.response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        {props.title}
      </Button>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        size={"xl"}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add user to project</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Task Name</FormLabel>
              <Input
                placeholder="Task name"
                onChange={handleChange}
                value={task}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            {
              <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                Create
              </Button>
            }
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalForm;
