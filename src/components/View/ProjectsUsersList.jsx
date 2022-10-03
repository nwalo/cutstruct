import { React, useState, useEffect, useSearchParams } from "react";
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
import Modal from "../Modal/Modal";

const ProjectUserList = (props) => {
  const params = useParams();
  const projectCompany = params.projectId;
  const [users, setUser] = useState([]);
  const [project, setProject] = useState([]);

  let userId = localStorage.getItem("userId");
  useEffect(() => {
    let getData = async () => {
      const res = await axios.post(
        "/project/getUser",
        { userId: userId, company: projectCompany },
        cors()
      );
      // console.log(res);
      setUser(res.data.data);
      setProject(res.data.project);
    };
    getData();
  }, []);

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
      <Box display={"flex"} justifyContent="space-between">
        <Text as={"h2"} fontSize="2xl">
          View Project {projectCompany} Users
        </Text>
        <Modal title="Add New User" project={project} />
      </Box>
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

export default ProjectUserList;
