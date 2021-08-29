import { Flex, Text } from '@chakra-ui/react';

import CityCard from './CityCard';

export default function CitiesBox() {
    return(
        <Flex
            w="100%"
            maxWidth="1440px"
            justify="center"
            align="center"
            flexDirection="column"
        >
            <Text
                fontWeight="500"
                fontSize="2.25rem"
                fontColor="var(--dark-headings-and-text)"
                alignSelf="flex-start"
            >
                Cidades + 100
            </Text>

            <Flex
                flexDirection="row"
                flexWrap="wrap"
                justifyContent="space-around"
            >
                <CityCard name="Londres" country="Reino Unido" image="/DestinationPictures/London.jpg"/>
                <CityCard name="Paris" country="França"/>
                <CityCard name="Roma" country="Itália"/>
                <CityCard name="Praga" country="República Tcheca"/>
                <CityCard name="Amsterdã" country="Holanda"/>
                
            </Flex>

        </Flex>
    )
}