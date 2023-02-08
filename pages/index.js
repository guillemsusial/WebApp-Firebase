import React, {useState, useEffect} from 'react';
import {db} from '../config'
import {ref,set,onValue, remove} from 'firebase/database'
import {
  Box,
  Text,
  Heading,
  Button,
  SimpleGrid,
  GridItem,
  Avatar,
  Spacer,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { ExternalLinkIcon,DeleteIcon } from '@chakra-ui/icons'

//https://www.youtube.com/watch?v=6wk1OrGKE1w !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const KahootPage = () => {
  const addData = () => {
    set(ref(db,'users/' + 5),{
      name: "KOI Erika",
      imageUrl: "https://xsgames.co/randomusers/assets/avatars/pixel/33.jpg"
    })
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  const deleteUsersData = () => {
    remove(ref(db,'users')).then(()=>{
      console.log("Success!")
      onClose()
    }).then(()=>{
      set(ref(db,'counts'),{
        userIdCount: 1
      })
      console.log("User first id set to 1")
    }).catch((error) => {
      console.log(error)
    })
  }

  const [participants, setParticipants] = useState([]);
  useEffect(() => {
    onValue(ref(db,'users/'), snapshot => {
      let data = [];
      snapshot.forEach(snap => {
        data.push(snap.val());
      });
      setParticipants(data);
    });
  }, []);

  return (
    <Box p={8} maxW="800px" mx="auto">
      <Heading as="h1" mb={8}>
        Guillem's Quiz App
      </Heading>
      <Box
        mt={8}
        p={8}
        shadow="md"
        borderWidth="1px"
        rounded="lg"
        display="block"
      >
        <Heading as="h2" mb={10}>
          Participants:
        </Heading>
        <SimpleGrid columns={3} columnGap={3} rowGap={6} w="full">
          {participants.map((participant, index) => (
            <GridItem colSpan={1} display={'inline-flex'} alignItems={'center'} key={index}>
              <Avatar name={participant.name} src={participant.imageUrl} mr={2} />
              <Text fontSize="xl">{participant.name}</Text>
            </GridItem>
          ))}
        </SimpleGrid>
        <Flex>
          <Button colorScheme='green' mt={10}>
            <ExternalLinkIcon mr={3}/>Start quiz
          </Button>
          <Spacer />
          <Button colorScheme='red' mt={10} onClick={onOpen}>
            <DeleteIcon mr={3}/>Delete participants
          </Button>
        </Flex>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure you want to delete all data?</ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='red' onClick={deleteUsersData}>Delete data</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default KahootPage;