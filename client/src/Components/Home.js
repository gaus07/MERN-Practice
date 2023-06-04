import React from "react";
import {
  Text,
  Flex,
  VStack,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex bg="purple.100" height="94vh" alignItems="center" justifyContent="center">
      <VStack spacing={4}>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          Welcome
        </Text>
        <Text fontSize="xl" textAlign="center">
          We are the MERN Developers
        </Text>
      </VStack>
    </Flex>
  );
};

export default Home;
