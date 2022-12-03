import React from 'react';
import {Button, Text, Heading, Progress, Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/react';

export default function courseCard({ session }) {

  console.log(session);
  return (
    <Card align="left" size="md" bg = "whiteAlpha.900" borderRadius="3rem" borderColor="blackAlpha.900" borderWidth="0.05em">
      <CardHeader padding="2em" >
        <Heading size ="lg">{session.name}</Heading>
      </CardHeader>
      <CardBody padding="2em" >
        <Text>By { session.creator}</Text>
      </CardBody>
      {session.home && <div ><Button>Buy Now</Button></div>}
      {session.revenuePercentage && <Progress borderRadius = "1rem" value={session.revenuePercentage} />}
      <CardFooter padding="2em" >Total enrolled: {session.enrolled}</CardFooter>
    </Card>
  );
}
