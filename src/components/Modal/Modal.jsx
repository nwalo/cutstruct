import { React, useSearchParams, useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListIcon,
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

function ManualClose(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let userId = localStorage.getItem("userId");

    let getData = async () => {
      const res = await axios.post(`/getUsers`, { userId: userId }, cors());
      // console.log(res);
      setUsers(res.data.data);
    };

    getData();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();

    let userId = localStorage.getItem("userId");
    let data = {
      user: e.target.id,
      // company: projectCompany,
      userId,
      project: props.project,
    };
    console.log(e.target.id);
    console.log(data);

    axios
      .post("/projects/user", data, cors())
      .then((res) => {
        console.log(res.data);
        // res.data.status === 200
        //   ? window.location.reload()
        //   : console.log(res.data.response);
      })
      .catch((err) => console.log(err));
  };

  let Users = (props) => {
    return (
      <ListItem
        bg="#efefef"
        p={"10px"}
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Text>
          <span>{props.lname}</span> <span>{props.name}</span>
        </Text>
        <Button colorScheme={"blue"} as={"a"} id={props.id} onClick={handleAdd}>
          Add
        </Button>
      </ListItem>
    );
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <List spacing={3}>
              {users.map((i, k) => {
                return (
                  <Users
                    name={i.firstName}
                    lname={i.lastName}
                    email={i.username}
                    key={k}
                    id={i._id}
                  />
                );
              })}
            </List>
          </ModalBody>

          <ModalFooter>
            {
              //   <Button colorScheme="blue" mr={3}>
              //     Save
              //   </Button>
            }
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ManualClose;
