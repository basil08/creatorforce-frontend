import {  Flex, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import { Grid, GridItem, Card } from '@chakra-ui/react';
export default function CoursePageUser() {
  // const {parameter} = useParams();
  const [course1, setCourse] = useState('');
  const course = {
    title: 'COL202',
    description: 'Discrete Math Structures',
    reclec: true,
    startTime: new Date('02/01/2022'),
    endTime: new Date('03/01/2022'),
    lecs: [{ name: 'COL202', description: 'stillhere' }],
  };
  //query by url params, and fill using useState
  console.log(course);
  const navigate = useNavigate();
  // to be set up by the contract
  return (
    <Flex minHeight="100vh" height={'fit-content'}>
      <Flex flexDir="column" width="100%">
        <Navbar />

        <Grid h="100vh" templateColumns={'repeat(12, 1fr)'} gap={4}>
          <GridItem
            rowSpan={1}
            colStart={3}
            colEnd={11}
            borderLeft={'1px solid black'}
            borderRight={'1px solid black'}
            alignContent={'center'}
          >
            <Flex p="4" fontSize={36}>
              <Text>Course Webpage for </Text>
              <Text fontWeight={'bold'}> {course.title}</Text>
            </Flex>
            <Flex p="4" fontSize={26}>
              <Text>Course Description: </Text>
              <Text> {course.description}</Text>
            </Flex>
            {course.livelec && (
              <Flex p="4">
                <Text>This course has live lectures. </Text>
                {/* <Text>The Lecture Starts at {course.startTime} and ends at {course.endTime} </Text> */}
                <Flex justifyContent={'space-evenly'} p="4" m="4">
                  <Button size="lg" colorScheme={'gray'}>
                    Join Live Lecture
                  </Button>
                </Flex>
                <Flex justifyContent={'space-evenly'} p="4" m="4"></Flex>
              </Flex>
            )}
            {course.reclec && (
              <Flex p="4">
                <Text>This course has recorded lectures </Text>
                <Flex flexDir="column" p="2">
                  {course.lecs.map((lec, index) => (
                    <Card border={'1px solid black'} m="4">
                      <Flex justifyContent={'space-between'} m="4">
                        <Flex flexDir="column">
                          <Text>{lec.name}</Text>
                          <Text color="gray.600">{lec.description}</Text>
                        </Flex>
                        <Flex>
                          <Button bg="blue" color="white">
                            Watch Lecture
                          </Button>
                        </Flex>
                      </Flex>
                    </Card>
                  ))}
                </Flex>
              </Flex>
            )}
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
}
