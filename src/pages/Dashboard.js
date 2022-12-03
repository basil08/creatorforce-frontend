import { Progress, Flex, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import Layout from '../components/layout';
import CourseCard from '../components/courseCard';

export default function Dashboard() {
  // to be set up by the contract
  const [revenuePercentage, setRevenuePercentage] = useState(10);
  const [revenue, setRevenue] = useState(123);
  const sessions = [
    {
      name: 'Introduction to Human Psychology',
      creator: 'Satoshi Nakamoto',
      enrolled: 100,
      revenuePercentage : 10
    },
    {
      name: 'Introduction to Mechanics',
      creator: 'Taylor and Jordan',
      enrolled: 42,
      revenuePercentage : 70
    }
  ];

  return (
    <Layout>
      <Flex bg="gray.200" flexDir="column">
        <Flex justifyContent={"space-evenly"}>
          <Button colorScheme={"blue"}>Add a Live Webinar</Button>
          <Button colorScheme={"gray"}>Pre-recorded lectures</Button>

        </Flex>
        <Flex p="4">
          Total revenue so far:
          <Text fontWeight={'bold'}> ${revenue}</Text>
        </Flex>
        

        <Flex flexDir={'column'} w="100%">
          <Flex>
            <Text fontSize="35px" fontWeight={'bold'}>Courses</Text>
          </Flex>
          <Flex flexDir="column" p="2">
          {sessions.map((session, index) => (
            <CourseCard size="lg" session={session} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}
