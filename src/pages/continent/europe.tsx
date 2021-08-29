import { Flex, Text } from '@chakra-ui/react';

import ContinentHeader from '../../components/ContinentHeader';
import ContinentBanner from '../../components/ContinentBanner';

export default function Europe() {
    return(
        <Flex
            w="100vw"
            flexDir="column"
            justify="center"
            align="center"
            paddingLeft={{ base: "16px", lg: "8.75rem"}}
            paddingRight={{ base: "16px", lg: "8.75rem"}}
        >
            <ContinentHeader />

            <ContinentBanner />

            <Flex
                w="100vw"
                maxWidth="1440px"
                maxHeight="500px"
                justifyContent="center"
                alignItems="center"
            >
                <Text>
                    A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                    
                </Text>
            </Flex>
        </Flex>
    )
}