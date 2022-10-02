import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  ButtonGroup,
  Text,
  Box,
} from "@chakra-ui/react";
import axios from "../../instance";
import cors from "cors";

const UserList = (props) => {
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

  console.log(users);
  // return;

  let Users = (props) => {
    return (
      <Tr>
        <Td>{props.name}</Td>
        <Td>{props.lname}</Td>
        <Td>{props.email}</Td>
        <Td>
          <Button colorScheme="red" id={props.id}>
            Delete User
          </Button>
        </Td>
      </Tr>
    );
  };

  return (
    <Box>
      <Text as={"h2"} fontSize="2xl">
        Users List
      </Text>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email Address</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
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
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserList;
