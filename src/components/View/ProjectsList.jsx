import { React, useEffect, useState } from "react";
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
  Link,
  ButtonGroup,
  Box,
  Text,
} from "@chakra-ui/react";
import axios from "../../instance";
import cors from "cors";
import { useSearchParams } from "react-router-dom";

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let userId = localStorage.getItem("userId");

    let getData = async () => {
      const res = await axios.post(`/getProjects`, { userId: userId }, cors());
      setProjects(res.data.data);
    };

    getData();
  }, []);

  let Projects = (props) => {
    return (
      <Tr>
        <Td>{props.company}</Td>
        <Td>{props.name}</Td>
        <Td>
          <Link
            href={`/projects/${props.company}/tasks`}
            style={{ textDecoration: "underline" }}
            _focus={{ boxShadow: "none" }}
            color="blue"
          >
            View Task
          </Link>
        </Td>
        <Td>
          <Link
            href={`/projects/${props.company}/users`}
            style={{ textDecoration: "underline" }}
            _focus={{ boxShadow: "none" }}
          >
            View Users
          </Link>
        </Td>
        <Td>
          <Button colorScheme="red">Delete Project</Button>
        </Td>
      </Tr>
    );
  };

  return (
    <Box>
      <Text as={"h2"} fontSize="2xl">
        Projects List
      </Text>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Company Name</Th>
              <Th>Project Name</Th>
              <Th>View Tasks</Th>
              <Th>View User</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {projects.map((i) => {
              return <Projects company={i.company} name={i.name} />;
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProjectsList;
