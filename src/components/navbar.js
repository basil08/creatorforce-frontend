import React from 'react';
import { Flex, Image, Text, Square, Center, Button } from '@chakra-ui/react';
// import { LinkIcon } from "@chakra-ui/icons";


export default function Navbar() {
  return (
    <Flex justifyContent={'space-between'} height="15vh" width="100%">
      {/* Logo */}
      <Flex w="100%">
        <Center w="75px">
          <Image boxSize={'40px'} objectFit="cover" src="/logo.svg" />
        </Center>
        <Square size="90px">
          <Text fontWeight={"bold"}>CreatorForce.</Text>
        </Square>
      </Flex>

      <Flex>
        <Button colorScheme={"blue"} variant="solid" m="2">
          {/* <LinkIcon /> */}
          Connect your wallet!
        </Button>
        <Button variant="outline" m="2">
          Create your content!
        </Button>
      </Flex>
    </Flex>
  );
}
