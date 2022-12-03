import React from 'react';

import { Flex, Text } from '@chakra-ui/react';
import Navbar from '../components/navbar';

export default function DashboardUser() {
  return (
    <Flex minHeight="100vh" height={'fit-content'}>
      <Flex flexDir="column" width="100%">
        <Navbar />
      </Flex>
    </Flex>
  );
}
