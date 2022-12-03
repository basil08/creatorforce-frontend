import { Progress, Flex, Text, Button, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import Layout from '../components/layout';
import CourseCard from '../components/courseCard';

export default function CoursePage(props) {
  // to be set up by the contract
  

  return (
    <Layout>
      <Flex bg="gray.200" flexDir="column">
        <Heading>Course Webpage for {props.name}</Heading>
        <Text>Course Description: {props.description}</Text>
        {props.livelec && 
        <div>
          <Text>This course has live lectures. </Text>
          <Text>The Lecture Starts at {props.startTime} and ends at {props.endTime} </Text>
          <Button onClick={()=>{}}>Join Meeting Via Link</Button>
        </div>}
        {props.reclec && <div><Text>This course has recorded lectures </Text>
          {props.lecs.map((lec, index) => (
            <div>
              <Text>The lecture's name is {lec.name} and its description is {lec.description}</Text>
              <Text>Watch lecture at {lec.link}</Text>
            </div>
          ))}
        <Button onClick={()=>{}}>Join Meeting Via Link</Button></div>}
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
