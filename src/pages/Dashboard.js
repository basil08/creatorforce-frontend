import {
  Progress,
  Flex,
  Text,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import React, { useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Layout from '../components/layout';
import CourseCard from '../components/courseCard';
import Navbar from '../components/navbar';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


export default function Dashboard() {
  // to be set up by the contract
  const [revenuePercentage, setRevenuePercentage] = useState(10);
  const [revenue, setRevenue] = useState(12.346);
  const navigate = useNavigate();

  const sessions = [
    {
      name: 'Introduction to Human Psychology',
      creator: 'Satoshi Nakamoto',
      enrolled: 100,
      revenuePercentage: 10,
    },
    {
      name: 'Introduction to Mechanics',
      creator: 'Taylor and Jordan',
      enrolled: 42,
      revenuePercentage: 70,
    },
  ];

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
          >
            <Flex
              justifyContent={'space-evenly'}
              p="4"
              m="4"
              borderBottom={'1px solid black'}
            >
              <Button size="lg" colorScheme={'blue'} onClick={()=>navigate("/dashboard/creator")}>
                Creator
              </Button>
              <Button size="lg" colorScheme={'gray'} onClick={()=>navigate("/dashboard/user")}>
                User
              </Button>
            </Flex>
            <Flex p="4" fontSize={36}>
              <Text>Total revenue:  </Text>
              <Text fontWeight={'bold'}> {revenue} ETH</Text>
            </Flex>

            <Flex flexDir={'column'} w="100%" borderTop={'1px solid black'}>
              <Flex p="4">
                <Text fontSize="35px" fontWeight={'bold'}>
                  Your Created Courses
                </Text>
              </Flex>
              <Flex flexDir="column" p="2">
                {sessions.map((course, index) => (
                  <Card border={'1px solid black'} m="4">
                    <Flex justifyContent={'space-between'} m="4">
                      <Flex flexDir="column">
                        <Text>{course.name}</Text>

                        <Text>By {course.instructor}</Text>
                        <Text color="gray.600">{course.description}</Text>
                      </Flex>
                      <Flex>
                        <Button
                          bg="blue"
                          color="white"
                          // onClick={() => navigateToCourse(course.id)}
                        >
                          Go to lesson
                        </Button>
                      </Flex>
                    </Flex>
                  </Card>
                ))}
              </Flex>
            </Flex>
            <Flex
                justifyContent={'space-evenly'}
                p="4"
                m="4"
              >
                <Button size="lg" colorScheme={'blue'} onClick={()=>navigate("/newwebinar")}>
                  Add Live Lecture Course
                </Button>
                <Button size="lg" colorScheme={'gray'} onClick={()=>navigate("/newlecture")}>
                  Add Pre-Recorded Course
                </Button>
              </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
}
