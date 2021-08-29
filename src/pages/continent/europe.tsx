import { Flex, Text } from '@chakra-ui/react';

import ContinentHeader from '../../components/ContinentHeader';
import ContinentBanner from '../../components/ContinentBanner';
import ContinentDescriptionBit from '../../components/ContinentDescriptionBit'

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
                w="100%"
                maxWidth="1440px"
                maxHeight="500px"
                justifyContent="space-between"
                alignItems="center"
                margin="5rem"
            >
                <Text
                    maxWidth="50%"
                    textAlign="justify"
                >
                    A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                </Text>

                <Flex
                    maxWidth="100%"
                    flexDirection="row"
                    align="center"
                    justifyContent="space-between"
                >
                    <ContinentDescriptionBit 
                        highlightInfo="50"
                        subtitleInfo="países"
                    />
                    
                    <ContinentDescriptionBit 
                        highlightInfo="60"
                        subtitleInfo="línguas"
                    />

                    <ContinentDescriptionBit 
                        highlightInfo="27"
                        subtitleInfo="cidades +100"
                    />

                </Flex>
            </Flex>
        </Flex>
    )
}