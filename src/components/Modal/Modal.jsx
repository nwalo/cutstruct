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
      console.log(res);
      setUsers(res.data.data);
    };

    getData();
  }, []);

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
        <Button colorScheme={"blue"}>Add</Button>
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
                    id={i.id}
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
