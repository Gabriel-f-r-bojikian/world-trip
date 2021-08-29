import { Flex, Image, Text } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

import TravelType from './TravelType';
import TravelBullet from './TravelBullet';

const breakpoints = createBreakpoints({
    sm: "30em",
    md: null,
    lg: null,
    xl: "80em",
  })

export default function ContinentBanner () {
    return (
        <Flex
            position="relative"
            w="100vw"
            maxWidth="1440px"
            maxHeight="500px"
            justify="center"
            align="center"
        >
            <Image
                src="/DestinationPictures/BigBen.jpg"
                objectFit="cover"
                w="100%"
                h="500px"
                filter="brightness(0.75)"
            />

            <Flex
                position="absolute"
                top="75%"
                left="15%"
                transform="translate(-50%, -50%)"
            >
                <Text
                    fontSize="3rem"
                    fontWeight="600"
                    color="#FFF"
                >
                    Europa
                </Text>
            </Flex>
        </Flex>
    )
}