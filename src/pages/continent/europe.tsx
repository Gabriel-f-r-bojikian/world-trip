import { Flex } from '@chakra-ui/react';

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
        </Flex>
    )
}