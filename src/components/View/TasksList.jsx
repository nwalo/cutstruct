import React from "react";
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
  Box,
  Text,
} from "@chakra-ui/react";

const TasksList = () => {
  return (
    <Box>
      <Text as={"h2"} fontSize="2xl">
        Tasks List
      </Text>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email Address</Th>
              <Th>Phone</Th>
              <Th>Country</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td>25.4</Td>
              <Td>25.4</Td>
              <Td>
                <Button colorScheme="blue">Add User</Button>
              </Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td>30.48</Td>
              <Td>30.48</Td>
              <Td>30.48</Td>
              <Td>
                <Button colorScheme="blue">Add User</Button>
              </Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td>0.91444</Td>
              <Td>0.91444</Td>
              <Td>0.91444</Td>
              <Td>
                <Button colorScheme="blue">Add User</Button>
              </Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th>multiply by</Th>
              <Th>multiply by</Th>
              <Th>multiply by</Th>
              <Th>
                <Button colorScheme="blue">Add User</Button>
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TasksList;
