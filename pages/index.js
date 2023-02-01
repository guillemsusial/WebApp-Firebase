import React from 'react';
import {
  Box,
  Text,
  Heading,
  Button,
  useDisclosure,
  SimpleGrid,
  GridItem,
  FormControl,
  Input,
  Icon
} from '@chakra-ui/react';
import {SpinnerIcon} from '@chakra-ui/icons';
import { MdReceipt } from 'react-icons/md';

const KahootPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <GridItem colSpan={1}>
          
          <Text fontSize='xl'><Icon as={MdReceipt} mr={2}/>KOI Jose antonio</Text>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <Input placeholder="John" />
          </FormControl>
        </GridItem>
      </SimpleGrid>
        <Button variantColor="blue" mt={5}>Start quiz</Button>
      </Box>
    </Box>
  );
};

export default KahootPage;