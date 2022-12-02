import React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/react';

export default function courseCard({ session }) {

  console.log(session);
  return (
    <Card>
      <CardHeader>
        {session.name}
      </CardHeader>
      <CardBody>
        By { session.creator}
      </CardBody>
      <CardFooter>Total enrolled: {session.enrolled}</CardFooter>
    </Card>
  );
}
