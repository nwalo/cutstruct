import { React, useState, useEffect } from "react";
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
  Select,
  HStack,
  Options,
  ButtonGroup,
  Box,
  Text,
} from "@chakra-ui/react";
import ModalForm from "../Modal/ModalForm";
import axios from "../../instance";
import cors from "cors";

const TasksList = () => {
  const params = useParams();
  const projectCompany = params.projectId;
  const [tasks, setTasks] = useState([]);
  const [project, setProject] = useState([]);

  let userId = localStorage.getItem("userId");
  useEffect(() => {
    let getData = async () => {
      const res = await axios.post(
        "/project/getTask",
        { userId: userId, company: projectCompany },
        cors()
      );
      setTasks(res.data.data);
      setProject(res.data.project);
    };
    getData();
  }, []);

  let handleChange = (e) => {
    console.log(e.target.value);
    // setTasks(e.target.value);
  };

  let Tasks = (props) => {
    return (
      <Tr>
        <Td>{props.task}</Td>
        <Td>
          <Select onChange={handleChange} name="status">
            <option value="Backlog">Backlog</option>
            <option value="Doing">Doing</option>
            <option value="Blocked">Blocked</option>
            <option value="Done">Done</option>
          </Select>
        </Td>

        <Td>
          <Button colorScheme="red">Delete</Button>
        </Td>
      </Tr>
    );
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let userId = localStorage.getItem("userId");
  //   let data = {
  //     company: projectCompany,
  //     userId,
  //   };

  //   // console.log(data);
  //   axios
  //     .post("/project/task/", data, cors())
  //     .then((res) => {
  //       console.log(res.data);
  //       // res.data.status === 200
  //       //   ? window.location.assign("/projects")
  //       //   : console.log("err");
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <Box>
      <Box display={"flex"} justifyContent="space-between">
        <Text as={"h2"} fontSize="2xl">
          View Project - {projectCompany} - Tasks
        </Text>
        <ModalForm title="Create New Task" project={project} />
      </Box>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Task Name</Th>
              <Th>Change Status</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tasks.map((i) => {
              return <Tasks task={i.task} status={i.status} />;
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TasksList;
