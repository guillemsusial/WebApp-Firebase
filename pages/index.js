import React, {useState} from 'react';
import {db} from '../config'
import {ref,set,onValue} from 'firebase/database'
import {
  Box,
  Text,
  Heading,
  Button,
  SimpleGrid,
  GridItem,
  Avatar
} from '@chakra-ui/react';

//https://www.youtube.com/watch?v=6wk1OrGKE1w !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const KahootPage = () => {
  const addData = () => {
    set(ref(db,'users/' + 1),{
      name: "KOI Eusebio",
      imageUrl: "https://xsgames.co/randomusers/assets/avatars/pixel/27.jpg"
    })
  }
  return (
    <Box p={8} maxW="800px" mx="auto">
      <Heading as="h1" mb={8}>
        Guillem Susial's Quiz App
      </Heading>
        <Box
          mt={8}
          p={8}
          shadow="md"
          borderWidth="1px"
          rounded="lg"
          display="block"
        >
      <Heading as="h2" mb={4}>
        Participants:
      </Heading>
      <SimpleGrid columns={3} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={1} display={'inline-flex'} alignItems={'center'}>
          <Avatar name='KOI Jose antonio' src='https://xsgames.co/randomusers/assets/avatars/pixel/27.jpg' mr={2}/>
          <Text fontSize='xl'>KOI Jose antonio</Text>
        </GridItem>
        <GridItem colSpan={1} display={'inline-flex'} alignItems={'center'}>
          <Avatar name='KOI Don soriano' src='https://xsgames.co/randomusers/assets/avatars/pixel/41.jpg' mr={2}/>
          <Text fontSize='xl'>KOI Don soriano</Text>
        </GridItem>
        <GridItem colSpan={1} display={'inline-flex'} alignItems={'center'}>
          <Avatar name='KOI Jose antonio' src='https://xsgames.co/randomusers/assets/avatars/pixel/22.jpg' mr={2}/>
          <Text fontSize='xl'>KOI Jose Miguel</Text>
        </GridItem>
      </SimpleGrid>
        <Button mt={5} onClick={addData}>Start quiz</Button>
      </Box>
    </Box>
  );
};

export default KahootPage;