import React from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';
// import { LinkIcon } from "@chakra-ui/icons";
export default function Navbar({
  shouldConnect,
  onClickDisconnect,
  onClickConnect,
  walletAddress,
}) {
  return (
    <Flex
      borderBottom={'1px solid black'}
      justifyContent={'space-between'}
      height="10vh"
      width="100%"
      bg="gray.200"
    >
      {/* Logo */}
      <Flex m="2">
        {/* <Center w="75px">
          <Image boxSize={'40px'} bg="gray.200" objectFit="cover" src="/logo.svg" />
        </Center>
        <Square size="90px" bg="gray.200">
          <Text fontWeight={"bold"}>CreatorForce.</Text>
        </Square> */}
        <Text pl="4" pt="2" fontWeight={'bold'}>
          Creator
          <Text color="blue" fontWeight={'bold'} as="span">
            Force.
          </Text>
        </Text>
      </Flex>

      <Flex>
        {shouldConnect === true ? (
          <Button
            bg={'blue'}
            color="white"
            variant="solid"
            m="2"
            onClick={onClickConnect}
          >
            {/* <LinkIcon /> */}
            Connect your wallet
          </Button>
        ) : (
          <Button
            bg={'blue'}
            color="white"
            variant="solid"
            m="2"
            onClick={onClickDisconnect}
          >
            {/* <LinkIcon /> */}
            Address: {walletAddress}
          </Button>
        )}
        <Button colorScheme="black" variant="outline" m="2">
          Create your content
        </Button>
      </Flex>
    </Flex>
  );
}
