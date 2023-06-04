import React from "react";
import {
  Box,
  Container,
  Heading,
  VStack,
  HStack,
  Text,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
const Contact = () => {
  return (
    <Container maxW="full" py={10}>
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="10vh"
    >
      <VStack spacing={8}>
        <HStack spacing={8}>
          <Box
            w="250px"
            h="100px"
            borderRadius="md"
            p={4}
            boxShadow="md"
          >
            <Text fontWeight="bold">Phone</Text>
            <Text>+1 123-456-7890</Text>
          </Box>
          <Box
            w="250px"
            h="100px"
            borderRadius="md"
            p={4}
            boxShadow="md"
          >
            <Text fontWeight="bold">Email</Text>
            <Text>contact@example.com</Text>
          </Box>
          <Box
            w="250px"
            h="100px"
            borderRadius="md"
            p={4}
            boxShadow="md"
          >
            <Text fontWeight="bold">Address</Text>
            <Text>123 Street, City, Country</Text>
          </Box>
        </HStack>
      </VStack>
    </Box>
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
    >
      <Box
        w="50%"
        h="fit-content"
        borderRadius="md"
        p={10}
        boxShadow="md"
      >
        <VStack mt={8} spacing={4}>
          <Heading size="lg">Get in touch</Heading>
          <HStack spacing={4} p={6}>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Phone Number" />
          </HStack>
          <Textarea placeholder="Message" rows={6} />
          <Button colorScheme="purple">Send Message</Button>
        </VStack>
      </Box>
    </Box>
    </Container>
  );
};

export default Contact;
