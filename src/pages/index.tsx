import { Flex, Divider, Text } from '@chakra-ui/react';
import Banner from '../components/Banner';
import Header from '../components/Header';

export default function Home() {
  return (
    <Flex
      w="100vw"
      flexDir="column"
      justify="center"
      align="center"
    >
      <Header />

      <Banner />

      <Divider
        variant="solid"
        width="5.625rem"
        margin="5rem 0"
        border="2px"
        borderColor="#47585B"
      />

      <Text
        align="center"
        fontSize="4xl"
        fontWeight="500"
        marginBottom="3.25rem"
      >
        Vamos nessa?<br />
        Então escolha seu continente
      </Text>
    </Flex>
  )
}
