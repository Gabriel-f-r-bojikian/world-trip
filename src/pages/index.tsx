import { Flex } from '@chakra-ui/react';
import Banner from '../components/Banner';
import Header from '../components/Header';

export default function Home() {
  return (
    <Flex
      w="100vw"
      flexDir="column"
      justify="center"
    >
      <Header />

      <Banner />
    </Flex>
  )
}
