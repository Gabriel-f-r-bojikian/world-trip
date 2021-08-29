import { Flex, Image, Text } from '@chakra-ui/react';

interface CityCardProps {
    name: string;
    country: string;
    flag: string;
    image: string;
}

export default function CityCard(props: CityCardProps) {
    return(
        <Flex
            w="16rem"
            h="16rem"
            maxWidth="16rem"
            maxHeight="16rem"
            border="1px"
            borderColor="var(--highlight)"
            borderRadius="4px"
            marginTop="3rem"
            flexDirection="column"
        >
            <Image 
                w="100%"
                h="10rem"
                src={props.image}
                objectFit="cover"
            />

            <Flex
                flexDirection="row"
                align="center"
                justifyContent="space-between"
                margin="1.125rem 1.5rem"
            >
                <Flex
                    flexDirection="column"
                >
                    <Text
                        fontFamily=" 'Barlow', sans-serif"
                        fontWeight="600"
                        fontSize="1.25rem"
                        color="var(--dark-headings-and-text)"
                        marginBottom="0.75rem"
                    >
                        {props.name}
                    </Text>
                    <Text
                        fontWeight="500"
                        color="var(--dark-info)"
                    >
                        {props.country}
                    </Text>

                </Flex>

                <Image 
                    src={props.flag}
                    h="30px"
                    w="30px"
                    border="1px"
                    borderRadius="50%"
                />
            </Flex>


        </Flex>
    )
}