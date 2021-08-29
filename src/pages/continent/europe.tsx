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
                    <Flex
                        flexDirection="column"
                        align="center"
                        justifyContent="center"
                        margin="0 1.5rem"
                    >
                        <Text
                            fontWeight="700"
                            fontSize="3rem"
                            color="var(--highlight)"
                        >
                            50
                        </Text>
                        <Text
                            fontWeight="600"
                        >
                            países
                        </Text>
                    </Flex>

                    <Flex
                        flexDirection="column"
                        align="center"
                        justifyContent="center"
                        margin="0 1.5rem"
                    >
                        <Text
                            fontWeight="700"
                            fontSize="3rem"
                            color="var(--highlight)"
                        >
                            60
                        </Text>
                        <Text
                            fontWeight="600"
                        >
                            línguas
                        </Text>
                    </Flex>

                    <Flex
                        flexDirection="column"
                        align="center"
                        justifyContent="center"
                        margin="0 1.5rem"
                    >
                        <Text
                            fontWeight="700"
                            fontSize="3rem"
                            color="var(--highlight)"
                        >
                            27
                        </Text>
                        <Text
                            fontWeight="600"
                        >
                            cidades +100
                        </Text>
                    </Flex>

                </Flex>
            </Flex>
        </Flex>
    )
}