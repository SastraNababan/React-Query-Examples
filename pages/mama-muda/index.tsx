import React, { useState } from "react";
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
  Badge,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";
import { useMutation, useQuery, useQueryClient } from "react-query";
import MamaTable from "./MamaTable";
import { useForm } from "react-hook-form";

const getMessages = async () => {
  const URL = " http://localhost:3000/api/message";
  const result = await fetch(URL);
  return await result.json();
};

export type MessageProps = {
  id?: number;
  createdAt: string;
  phoneNumber: number;
  message: string;
  status?: string;
};

export function formatDate(date: string) {
  return new Date(date).toLocaleString("id-ID");
}

const submitMessage = async (data: MessageProps) => {
  const URL = "http://localhost:3000/api/message";
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("An error has occured");
  }
  return await response.json();
};

export default function MamaMuda() {
  const queryClient = useQueryClient();
  const { data, isSuccess } = useQuery("get-mama-muda", getMessages, {
    staleTime: 15000,
    refetchInterval: 15000,
  });

  const {
    handleSubmit,
    errors,
    register,
    reset,
    clearErrors,
  } = useForm<MessageProps>();

  const [errMessage, setErrMessage] = useState("");

  const mutation = useMutation(submitMessage, {
    onMutate: async (newMessage) => {
      // mutation in-progress
      // use for : spinner, disabled form,etc

      // Optimistic Update :
      // 1. cancel any outgoing refetch
      await queryClient.cancelQueries("get-mama-muda");

      // 2. snapshot the previous value
      const previousMessages = queryClient.getQueryData<MessageProps[]>(
        "get-mama-muda"
      );

      // 3. optimistically update new value
      if (previousMessages) {
        newMessage = { ...newMessage, createdAt: new Date().toISOString() };
        const finalMessages = [...previousMessages, newMessage];
        queryClient.setQueryData("get-mama-muda", finalMessages);
      }
      return { previousMessages };
    },
    onSettled: async (data, error: any) => {
      // mutation done --> success, error
      if (data) {
        await queryClient.invalidateQueries("get-mama-muda");
        setErrMessage("");
        clearErrors();
        reset();
      }

      if (error) {
        setErrMessage(error.message);
      }
    },
    onError: async (error: any, _variables, context: any) => {
      // mutation done with error response
      // console.log("onError");
      setErrMessage(error.message);
      if (context?.previousMessages) {
        queryClient.setQueryData<MessageProps[]>(
          "get-mama-muda",
          context.previousMessages
        );
      }
    },
    onSuccess: async () => {
      // mutation done with success response
      console.log("onSuccess");
    },
  });

  const onSubmit = async (data: MessageProps) => {
    await mutation.mutate(data);
  };
  return (
    <Layout title="💌 Mama Muda" subTitle="Minta Pulsa">
      <Flex>
        <Box>
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
              <FormControl pb={4} isInvalid={errors.phoneNumber ? true : false}>
                <FormLabel
                  htmlFor="phoneNumber"
                  fontWeight="bold"
                  fontSize="xs"
                  letterSpacing="1px"
                  textTransform="uppercase"
                >
                  Phone Number
                </FormLabel>
                <Input
                  name="phoneNumber"
                  placeholder="Phone Number"
                  ref={register({
                    required: "Phone Number Required",
                  })}
                />
                <FormErrorMessage>
                  {errors.phoneNumber && errors.phoneNumber.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.message ? true : false}>
                <FormLabel
                  htmlFor="name"
                  fontWeight="bold"
                  fontSize="xs"
                  letterSpacing="1px"
                  textTransform="uppercase"
                >
                  Message
                </FormLabel>
                <Textarea
                  placeholder="Bullshit Message"
                  name="message"
                  ref={register({
                    required: "message required",
                  })}
                />
                <FormErrorMessage>
                  {errors.message && errors.message.message}
                </FormErrorMessage>
              </FormControl>

              <Button
                mt={4}
                colorScheme="teal"
                type="submit"
                onClick={handleSubmit(onSubmit)}
              >
                Send
              </Button>
            </form>
          </Box>
        </Box>
        <Box flex="1">{isSuccess && <MamaTable data={data} />}</Box>
      </Flex>
    </Layout>
  );
}
