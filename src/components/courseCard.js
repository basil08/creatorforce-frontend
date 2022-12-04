import React from 'react';
import {
  Button,
  Text,
  Card,
  Flex,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
export default function CourseCard({ course }) {
  const navigate = useNavigate();
  const navigateToCourse = id => {
    let path = `/dashboard/${id}`;
    navigate(path);
  };
  console.log(course);
  return (
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
  );
}
