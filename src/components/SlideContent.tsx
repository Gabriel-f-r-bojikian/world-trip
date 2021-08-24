import { Flex, Image, Text } from '@chakra-ui/react';

interface SliderContentProps {
    name: string;
    description: string;
    image: string;
}

export default function SliderContent(props: SliderContentProps) {
    return (
        <Flex
            // backgroundImage={props.image}
            w="100%"
            h="100%"
            max-width="100%"
            max-height="100%"
            align="center"
            justify="center"
        >
            <Image 
                src={props.image} 
                filter="brightness(0.35)"
            />

            <Flex
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                direction="column"
            >
                <Text
                    fontFamily="Poppins"
                    fontSize="3rem"
                    color="#F5F8FA"
                    fontWeight="700"
                >
                    {props.name} 
                </Text>
                <Text
                    fontFamily="Poppins"
                    fontSize="1.5rem"
                    color="#DADADA"
                    fontWeight="700"
                >
                    {props.description}
                </Text>
            </Flex>
        </Flex>
    )
}