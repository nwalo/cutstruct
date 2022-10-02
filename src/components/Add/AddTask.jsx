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

function AddTask(): JSX.Element {
  return (
    <Flex
      minH={"100vh"}
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
          Create new task
        </Heading>
        <FormControl id="text" isRequired>
          <FormLabel>Project Name </FormLabel>
          <Input
            placeholder="Project Name e.g Eiffel Tower Construction."
            _placeholder={{ color: "gray.500" }}
            type="text"
          />
        </FormControl>
        <FormControl id="text" isRequired>
          <FormLabel>Company Name</FormLabel>
          <Input type="text" placeholder="Company Name e.g Cutstruct." />
        </FormControl>
        <Stack spacing={6}>
          <Button
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

export default AddTask;
