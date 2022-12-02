import React from "react";
import { Flex } from "@chakra-ui/react";
import Navbar from "./navbar";


export default function Layout({ children }) {
  return (
    <Flex minHeight="100vh" height={'fit-content'} width={'100vw'}>
      <Flex flexDir="column" bg="gray.100" height={'fit-content'} width={'100%'}>
        <Flex p="4">
          <Navbar />
        </Flex>
        <Flex justifyContent={'center'} w="100%">
          <Flex>{children}</Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
