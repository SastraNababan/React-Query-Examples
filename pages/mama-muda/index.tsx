import React from "react";
import {
  Box,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Textarea,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";

export default function MamaMuda() {
  return (
    <Layout title="💌 Mama Muda" subTitle="Minta Pulsa">
      <Flex>
        <Box
          w="md"
          p={5}
          mr={4}
          border="1px"
          borderColor="gray.200"
          boxShadow="md"
        >
          <Text
            fontSize="xl"
            fontWeight="bold"
            mb={4}
            pb={2}
            borderBottom="1px"
            borderColor="gray.200"
          >
            ✍️ Request Pulsa
          </Text>
          <form>
            <FormControl pb={4}>
              <FormLabel
                htmlFor="phoneNumber"
                fontWeight="bold"
                fontSize="xs"
                letterSpacing="1px"
                textTransform="uppercase"
              >
                Phone Number
              </FormLabel>
              <Input name="phoneNumber" placeholder="Phone Number" />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel
                htmlFor="name"
                fontWeight="bold"
                fontSize="xs"
                letterSpacing="1px"
                textTransform="uppercase"
              >
                Message
              </FormLabel>
              <Textarea placeholder="Bullshit Message" />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>

            <Button mt={4} colorScheme="teal" type="submit">
              Send
            </Button>
          </form>
        </Box>

        <Box flex="1">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Phone Number</Th>
                <Th>Message</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1/1/2021</Td>
                <Td>085267852222</Td>
                <Td>
                  Mama lagi di kantor polisi, kirim pulsa 1jt sekarang. CEPAT !
                </Td>
                <Td>Succes</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Layout>
  );
}
