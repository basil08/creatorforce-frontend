import {React, useState} from 'react';
import { Flex, Text, Button, Progress, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layout';
import CourseCard from '../components/courseCard';
export default function Home(){
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
    return (<div>
        <h1>Discover Trending Courses</h1>
        <Layout>
    <SimpleGrid columns={1}>
      <Flex bg="gray.200" flexDir="column">
        <Flex flexDir={'column'} w="100%">
          <Flex>
            <Text fontSize="35px" fontWeight={'bold'}>Courses</Text>
          </Flex>
          <Flex flexDir="column" p="2">
          {sessions.map((session, index) => (
            <CourseCard size="lg" padding="2em" session={session} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </SimpleGrid>
    </Layout>
    </div>)
}