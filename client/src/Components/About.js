import React from "react";
import {
  Box,
  Flex,
  Image,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import signPic from "../Assets/img.jpg";

const About = () => {
  return (
    <Flex align="center" justify="center" height="94vh">
      <Box maxW="full" p={30} boxShadow="md" borderRadius="md" bg="white">
        <Flex align="center" >
          <Image
            src={signPic}
            alt="Profile Image"
            boxSize="200px"
            borderRadius="full"
            mr={20}

          />

          <VStack align="start" spacing={4}>
            <Heading as="h1" size="xl" mb={2}>
              John Doe
            </Heading>
            <Text fontSize="xl" fontWeight="bold">
              Web Developer
            </Text>
            <Text fontSize="lg">Ranking: 5 stars</Text>
          </VStack>
        </Flex>

        <HStack align="start" mt={8} spacing={60}>
          <VStack spacing={4} justify="center">
            <HStack align="center" w="10">
              <FontAwesomeIcon icon={faGithub} size="2x" />
              <Text fontSize="lg">Github</Text>
            </HStack>

            <HStack align="center" w="10">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
              <Text fontSize="lg">Linkedin</Text>
            </HStack>

            <HStack align="center" w="10">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <Text fontSize="lg">Instagram</Text>
            </HStack>
          </VStack>

          <Box>
            <Text fontSize="lg" fontWeight="bold">
              Personal Details:
            </Text>

            <Text fontSize="lg">Name: Mohammed Gaus</Text>
            <Text fontSize="lg">User ID: 12345678901234</Text>
            <Text fontSize="lg">Profession: Web Developer</Text>
            <Text fontSize="lg">Location: Mumbai, INDIA</Text>
            <Text fontSize="lg">Email: abcxyz7@gmail.com</Text>
            <Text fontSize="lg">Phone: 12345 7890</Text>
          </Box>
        </HStack>
        <Flex ml="auto" justifyContent="center" alignItems="center">
          <Button size="sm" colorScheme="purple">
            Edit Profile
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default About;
