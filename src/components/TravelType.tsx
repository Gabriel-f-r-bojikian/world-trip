import { Flex, Text } from '@chakra-ui/react'

interface travelProps {
    travelImage: string;
    travelText: string;
}

export default function TravelType(props: travelProps) {
    return (
        <Flex
            direction="column"
            justifyContent="center"
            align="center"
        >
            <Flex 
                as="img"
                src={props.travelImage}
                alt="Cocktail"
                h="5.3125rem"
                marginBottom="1.5rem"
            />
            
            <Text
                font="Poppins"
                fontSize="1rem"
                fontWeight="600"
            >
                {props.travelText}
            </Text>

        </Flex>
    )
}