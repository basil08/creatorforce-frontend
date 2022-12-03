import {React, useState} from 'react';
import { Flex, Text, Button, Progress, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layout';
import CourseCard from '../components/courseCard';
import Navbar from '../components/navbar';
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
        <Navbar />
    <SimpleGrid columns={1}>
      <Flex  flexDir="column">
        <Flex flexDir={'column'} w="100%" >
          <Flex text-align="center" p="4rem" borderColor="black">
            <Text fontSize="35px" fontWeight={'bold'} align="center">Discover Trending Courses</Text>
          </Flex>
          <Flex flexDir="column" p="2">
          {sessions.map((session, index) => (
            <CourseCard size="lg" session={session} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </SimpleGrid>
    </div>)
}

