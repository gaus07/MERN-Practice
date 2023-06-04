import React from "react";
import {
  Flex,
  HStack,
  Image,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import signPic from "../Assets/img.jpg";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <HStack align="center" justify="flex-start" height="90vh">
      <Flex borderRightWidth={1} display={{ base: "none", md: "flex" }}>
        <Image objectFit="cover" w="full" h="60vh" src={signPic} />
      </Flex>

      <Flex w="full" h="full" alignItems="center" justifyContent="center">
        <Stack w="full" maxW="md" spacing={4} p={6}>
          <Heading fontSize="2xl" color="purple.500">
            Sign in to your account
          </Heading>

          <FormControl id="user">
            <FormLabel>Username</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<i className="zmdi zmdi-account" />}
              />
              <Input
                placeholder="Enter your username"
                focusBorderColor="purple.500"
              />
            </InputGroup>
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<i className="zmdi zmdi-email" />}
              />
              <Input
              type="password"
                placeholder="Enter your username"
                focusBorderColor="purple.500"
              />
            </InputGroup>
          </FormControl>

          <Button colorScheme="purple">Sign In</Button>
          <NavLink to="/Signup">Already Registered ?</NavLink>
        </Stack>
      </Flex>
    </HStack>
  );
};

export default Login;
