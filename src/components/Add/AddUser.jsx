import { React, useEffect, useState } from "react";

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Box,
  Text,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "../../instance";
import cors from "cors";

function AddUser(): JSX.Element {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");

  let handleChange = (e) => {
    console.log(e.target.value);
    let val = e.target.value;
    if (e.target.name === "firstName") {
      setFirstName(val);
    } else if (e.target.name === "lastName") {
      setLastName(val);
    } else if (e.target.name === "username") {
      setUsername(val);
    } else if (e.target.name === "password") {
      setPassword(val);
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      firstName: firstName,
      lastName: lastName,
      password: password,
      username: username,
    };

    axios
      .post("/users", data)
      .then((res) => {
        console.log(res);
        res.data.status === 200
          ? window.location.assign("/users")
          : setError(res.data.response.message);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <Flex
      // minH={"100vh"}
      py={"50px"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={4} w={"full"} maxW={"md"}>
        <Heading fontSize={"2xl"}>Create new user</Heading>
        <Box display={"flex"} justifyContent={"center"}>
          <Text as="p" p="0 7px" align={"center"} color="white" bg={"red"}>
            {error}
          </Text>
        </Box>
        <FormControl id="fName">
          <FormLabel>First Name</FormLabel>
          <Input
            value={firstName}
            onChange={handleChange}
            type="text"
            name="firstName"
          />
        </FormControl>
        <FormControl id="lName">
          <FormLabel>Last Name</FormLabel>
          <Input
            value={lastName}
            onChange={handleChange}
            type="text"
            name="lastName"
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>User Name (Email Address)</FormLabel>
          <Input
            value={username}
            onChange={handleChange}
            type="email"
            name="username"
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            value={password}
            onChange={handleChange}
            type="password"
            name="password"
          />
        </FormControl>
        <Stack spacing={6}>
          <Button colorScheme={"blue"} onClick={handleSubmit} variant={"solid"}>
            Create User
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default AddUser;
