import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  Image,
  Text,
  Box,
} from "@chakra-ui/react";
import axios from "../../instance";
import cors from "cors";

export default function SplitScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    let inputType = e.target.type;
    inputType === "email"
      ? setUsername(e.target.value)
      : setPassword(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      username: username,
      password: password,
    };

    axios
      .post("/login", data, cors())
      .then((res) => {
        localStorage.setItem("userId", res.data.userId);
        localStorage.setItem("lastName", res.data.lastName);
        localStorage.setItem("firstName", res.data.firstName);
        localStorage.setItem("accessToken", res.data.accessToken);
        res.data.status === 200
          ? navigate(`/dashboard`)
          : setError(res.data.response);
      })
      .catch((err) => setError(err));
  };
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <Box display={"flex"} justifyContent={"center"}>
            <Text as="p" p="0 7px" align={"center"} color="white" bg={"red"}>
              {error}
            </Text>
          </Box>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={handleChange} value={username} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={handleChange} value={password} />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.500"}>Forgot password?</Link>
            </Stack>
            <Button
              colorScheme={"blue"}
              onClick={handleSubmit}
              variant={"solid"}
            >
              Sign in
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
