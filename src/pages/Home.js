import React, { useState } from 'react';
import {
  CardBody,
  CardFooter,
  CardHeader,
  Card,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  LinkBox,
  Button,
  LinkOverlay,
} from '@chakra-ui/react';
import Navbar from '../components/navbar';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [currentTitle, setCurrentTitle] = useState('Creator');

  const navigate = useNavigate();

  const titles = [
    'Creator',
    'Teacher',
    'Educator',
    'Student',
    'Speaker',
    'Visionary',
    'Experts',
  ];

  const courses = [
    {
      name: 'Introduction to Ethereum',
      instructor: 'Vitalik Buterin',
      enrolled: 2345763,
      description: 'Learn about Ethereum',
      id: 1,
    },
    {
      name: 'Introduction to Ethereum',
      instructor: 'Vitalik Buterin',
      enrolled: 2345763,
      description: 'Learn about Ethereum',
      id: 2,
    },
    {
      name: 'Introduction to Ethereum',
      instructor: 'Vitalik Buterin',
      enrolled: 2345763,
      description: 'Learn about Ethereum',
      id: 3,
    },
    {
      name: 'Introduction to Ethereum',
      instructor: 'Vitalik Buterin',
      enrolled: 2345763,
      description: 'Learn about Ethereum',
      id: 4,
    },
  ];

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * titles.length);
    setCurrentTitle(titles[index]);
  });

  const navigateToCourse = id => {
    let path = `/dashboard/${id}`;
    navigate(path);
  };

  useEffect(() => {
    const intervalID = setInterval(shuffle, 2000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <Flex height="fit-content" minHeight="100vh">
      <Flex flexDir="column" width={'100%'}>
        <Navbar />

        <Grid h="100vh" templateColumns={'repeat(12, 1fr)'} gap={4}>
          <GridItem
            rowSpan={1}
            colStart={3}
            colEnd={11}
            borderLeft={'1px solid black'}
            borderRight={'1px solid black'}
          >
            <Flex justifyContent={'center'} h="80vh">
              <Flex
                flexDir="column"
                justifyContent={'center'}
                borderBottom={'1px solid black'}
              >
                <Flex>
                  <Heading>
                    Empowering the
                    <Text as="span" color="blue">
                      {' '}
                      {currentTitle}
                    </Text>
                    .
                  </Heading>
                </Flex>
              </Flex>
            </Flex>

            <Flex justifyContent="space-between" flexDir={'column'} p="4">
              <Text fontSize="32px" fontWeight={'bold'}>
                Curated lessons today
              </Text>

              <Flex flexDir="column">
                {courses.map((course, index) => (
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
                          onClick={() => navigateToCourse(course.id)}
                        >
                          Go to lesson
                        </Button>
                      </Flex>
                    </Flex>
                  </Card>
                ))}
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
}
