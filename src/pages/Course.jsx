import {  Flex, Text, Button, Heading } from '@chakra-ui/react';
import React, {  useParams } from 'react';
import Layout from '../components/layout';

export default function CoursePage({ course }) {
  // const params = useParams();

  // to be set up by the contract
  return (
    <Layout>
      <Flex bg="gray.200" flexDir="column">
        <Heading>Course Webpage for {course.name}</Heading>
        <Text>Course Description: {course.description}</Text>
        {course.livelec &&
        <div>
          <Text>This course has live lectures. </Text>
          <Text>The Lecture Starts at {course.startTime} and ends at {course.endTime} </Text>
          <Button onClick={()=>{}}>Join Meeting Via Link</Button>
        </div>}
        {course.reclec && <div><Text>This course has recorded lectures </Text>
          {course.lecs.map((lec, index) => (
            <div>
              <Text>The lecture's name is {lec.name} and its description is {lec.description}</Text>
              <Text>Watch lecture at {lec.link}</Text>
            </div>
          ))}
        <Button onClick={()=>{}}>Join Meeting Via Link</Button></div>}
      </Flex>
    </Layout>
  );
}
