import { React, useEffect, useState } from "react";

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import axios from "../../instance";
import cors from "cors";

export default function Register() {
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
      fName: firstName,
      lName: lastName,
      password: password,
      username: username,
    };

    axios
      .post("/register", data)
      .then((res) => {
        console.log(res);
        res.data.status === 200
          ? window.location.assign("/dashboard")
          : setError(res.data.response.message);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Register as an admin</Heading>
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
            <Button
              colorScheme={"blue"}
              onClick={handleSubmit}
              variant={"solid"}
            >
              Register
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
