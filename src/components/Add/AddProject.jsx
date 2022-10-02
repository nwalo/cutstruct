import { React, useEffect, useState } from "react";

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "../../instance";
import cors from "cors";

function AddProject(): JSX.Element {
  const [projectName, setProjectName] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");

  let params = window.location.href.sea;

  const handleChange = (e) => {
    let inputName = e.target.name;
    inputName === "company"
      ? setCompany(e.target.value)
      : setProjectName(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userId = localStorage.getItem("userId");
    let data = {
      projectName,
      company,
      userId,
    };

    // console.log(data);
    axios
      .post("/projects", data, cors())
      .then((res) => {
        console.log(res.data);
        res.data.status === 200
          ? window.location.assign("/projects")
          : setError(res.data.response);
      })
      .catch((err) => setError(err));
  };

  return (
    <Flex
      // minH={"1vh"}
      py={"50px"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Create new project
        </Heading>
        <FormControl id="text" isRequired>
          <FormLabel>Project Name </FormLabel>
          <Input
            placeholder="Project Name e.g Eiffel Tower Construction."
            _placeholder={{ color: "gray.500" }}
            type="text"
            name="project"
            value={projectName}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="text" isRequired>
          <FormLabel>Company Name</FormLabel>
          <Input
            type="text"
            placeholder="Company Name e.g Cutstruct."
            name="company"
            value={company}
            onChange={handleChange}
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            onClick={handleSubmit}
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default AddProject;
