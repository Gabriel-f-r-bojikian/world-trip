import { Flex, Text } from '@chakra-ui/react';

interface ContinentDescriptionBitProps {
    highlightInfo: string;
    subtitleInfo: string;
}

export default function ContinentDescriptionBit(props: ContinentDescriptionBitProps) {
    return(
        <Flex
            flexDirection="column"
            align="center"
            justifyContent="center"
            margin="0 1.5rem"
        >
            <Text
                fontWeight="700"
                fontSize={{base: "2rem", lg: "3rem"}}
                color="var(--highlight)"
            >
                {props.highlightInfo}
            </Text>
            <Text
                fontWeight="600"
            >
                {props.subtitleInfo}
            </Text>
        </Flex>
    )
}