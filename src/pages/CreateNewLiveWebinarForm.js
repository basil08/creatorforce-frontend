import React, { useState } from 'react';
import {
  Flex,
  Textarea,
  GridItem,
  Grid,
  Heading,
  NumberInput,
  NumberInputField,
  InputGroup,
} from '@chakra-ui/react';
import Navbar from '../components/navbar';
import {
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

export default function CreateNewLectureForm() {
  const [description, setDescription] = useState('');

  const handleInputChange = e => {
    setDescription(e.target.value);
  };

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
            <Flex p="4" flexDir={'column'}>
              <Heading p="2">Add a Live Course</Heading>
              <form>
                <FormControl p="4">
                  <FormLabel>Title</FormLabel>
                  <Input type="title" border={'1px solid black'} />
                </FormControl>
                <FormControl p="4">
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    value={description}
                    onChange={handleInputChange}
                    placeholder="Describe your lesson."
                    size="sm"
                  />
                </FormControl>
                <FormControl p="4">
                  <FormLabel>Start Time</FormLabel>
                  <InputGroup>
                    <Input
                      placeholder="Select Date and Time"
                      size="md"
                      type="datetime-local"
                    />
                  </InputGroup>
                </FormControl>
                <FormControl p="4">
                  <FormLabel>End Time</FormLabel>
                  <InputGroup>
                    <Input
                      placeholder="Select Date and Time"
                      size="md"
                      type="datetime-local"
                    />
                  </InputGroup>
                </FormControl>
                <FormControl p="4">
                  <FormLabel>Amount</FormLabel>
                  <NumberInput>
                    <NumberInputField />
                  </NumberInput>
                </FormControl>
                <FormControl p="4">
                  <FormLabel>Maximum Number of Participants</FormLabel>
                  <NumberInput>
                    <NumberInputField placeholder="Leave Empty if unbounded" />
                  </NumberInput>
                </FormControl>
              </form>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
}
