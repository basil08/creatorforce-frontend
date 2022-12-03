import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <Flex height="fit-content" minHeight="100vh" width="98vw">
      <Flex flexDir="column" width={"100%"}>
        <Navbar />
      </Flex>
    </Flex>
  );
}
