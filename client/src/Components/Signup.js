import React, { useState } from "react";
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
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import signPic from "../Assets/img.jpg";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    console.log(user);
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    })
      .then(async (saved) => {
        const data = await saved.json();
        // console.log(data);
        if (saved.status === 201) {
          window.alert(data.message);
          navigate("/login");
          return;
        }
        window.alert(data.error);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <HStack align="center" justify="flex-start" height="90vh">
      <Flex borderRightWidth={1} display={{ base: "none", md: "flex" }}>
        <Image objectFit="cover" w="full" h="60vh" src={signPic} />
      </Flex>

      <Flex w="full" h="full" alignItems="center" justifyContent="center">
        <Stack w="full" maxW="md" spacing={4} p={6}>
          <Heading fontSize="2xl" color="purple.500">
            Create an Account
          </Heading>

          <form method="POST">
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<i className="zmdi zmdi-account" />}
                />
                <Input
                  placeholder="Enter your Name"
                  focusBorderColor="purple.500"
                  name="name"
                  value={user.name}
                  onChange={handleInputs}
                />
              </InputGroup>
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<i className="zmdi zmdi-email" />}
                />
                <Input
                  placeholder="Enter your username"
                  focusBorderColor="purple.500"
                  name="email"
                  value={user.email}
                  onChange={handleInputs}
                />
              </InputGroup>
            </FormControl>

            <FormControl id="phone">
              <FormLabel>Phone phone</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<i className="zmdi zmdi-phone-in-talk" />}
                />
                <Input
                  placeholder="Enter your phone"
                  focusBorderColor="purple.500"
                  name="phone"
                  value={user.phone}
                  onChange={handleInputs}
                />
              </InputGroup>
            </FormControl>

            <FormControl id="work">
              <FormLabel>Profession</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<i className="zmdi zmdi-slideshow" />}
                />
                <Input
                  placeholder="Enter your Profession"
                  focusBorderColor="purple.500"
                  name="work"
                  value={user.work}
                  onChange={handleInputs}
                />
              </InputGroup>
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<i className="zmdi zmdi-lock" />}
                />
                <Input
                  type="password"
                  placeholder="Enter your Password"
                  focusBorderColor="purple.500"
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                />
              </InputGroup>
            </FormControl>

            <FormControl id="cpassword">
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<i className="zmdi zmdi-lock-outline" />}
                />
                <Input
                  type="password"
                  placeholder="Confirm your Password"
                  focusBorderColor="purple.500"
                  name="cpassword"
                  value={user.cpassword}
                  onChange={handleInputs}
                />
              </InputGroup>
            </FormControl>

            <Button
              colorScheme="purple"
              type="submit"
              value="register"
              onClick={postData}
            >
              Register
            </Button>
          </form>

          {/* <Link href="/Login" color="purple.500">Already Registered ? </Link> */}
          <NavLink to="/Login">Already Registered ?</NavLink>
        </Stack>
      </Flex>
    </HStack>
  );
};

export default Signup;
