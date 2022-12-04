import { Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import { Grid, GridItem } from '@chakra-ui/react';
export default function BuyCourse() {
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
              </Flex>
            )}
            {course.reclec && (
              <Flex p="4">
                <Text>This course has recorded lectures </Text>
              </Flex>
            )}
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
}
