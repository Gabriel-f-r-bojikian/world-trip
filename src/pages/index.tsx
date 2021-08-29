import { Flex, Divider, Text } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

import Banner from '../components/HomepageBanner';
import Header from '../components/HomepageHeader';
import Slider from '../components/Slider';


const breakpoints = createBreakpoints({
  sm: "30em",
  md: null,
  lg: null,
  xl: "80em",
})

export default function Home() {
  return (
    <Flex
      w="100vw"
      flexDir="column"
      justify="center"
      align="center"
      paddingLeft={{ base: "16px", lg: "8.75rem"}}
      paddingRight={{ base: "16px", lg: "8.75rem"}}

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
        w={{base: "100vw", lg: "100%"}}
        marginBottom="3.25rem"
        align="center"
        fontSize="4xl"
        fontWeight="500"
      >
        Vamos nessa?<br />
        Então escolha seu continente
      </Text>

      <Slider />

    </Flex>
  )
}
