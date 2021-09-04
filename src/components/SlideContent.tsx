import { Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
interface SliderContentProps {
    name: string;
    description: string;
    image: string;
}

export default function SliderContent(props: SliderContentProps) {
    
    let portuguese2EnglishNameMaps = new Map();

    portuguese2EnglishNameMaps.set('europa', 'europe');
    portuguese2EnglishNameMaps.set('américa do norte', 'north_america');
    portuguese2EnglishNameMaps.set('américa do sul', 'south_america');
    portuguese2EnglishNameMaps.set('ásia', 'asia');
    portuguese2EnglishNameMaps.set('áfrica', 'africa');
    portuguese2EnglishNameMaps.set('oceania', 'oceania');
    
    return (
        <Flex
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
                <Link href={`/continent/${portuguese2EnglishNameMaps.get(props.name.toLocaleLowerCase())}`}>
                    <Text
                        fontFamily="Poppins"
                        fontSize="3rem"
                        color="#F5F8FA"
                        fontWeight="700"
                        cursor="pointer"
                    >
                        {props.name} 
                    </Text>
                </Link>
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