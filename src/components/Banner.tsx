import { Flex, Text } from '@chakra-ui/react';
import TravelType from './TravelType';

export default function Banner () {
    return (
        <>
            <Flex
                w="100%"
                maxWidth="1440px"
                maxHeight="335px"
                backgroundImage="/HomeAssets/Background.png"
                justifyContent="center"
                alignItems="center"
                alignSelf="center"
            >
            <Flex
                flexDirection="column"
                color="white"

            >
                <Flex
                    as="p"
                    fontWeight="bold"
                    fontSize="36"
                >
                    5 Continentes, <br/> infinitas possibilidades.
                </Flex>

                <Flex
                    as="p"
                    fontSize="20"
                    fontWeight="light"
                >
                    Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou
                </Flex>
            </Flex>

            <Flex 
                as="img"
                src="/HomeAssets/Airplane.svg"
                paddingTop="6rem"
                marginLeft="12rem"
            />
            </Flex>

            <Flex
                w="100%"
                maxWidth="1240px"
                maxHeight="335px"
                marginTop="5rem"
                marginLeft="140px"
                marginRight="140px"
                justifyContent="space-between"
                alignItems="center"
                alignSelf="center"
            >
                <TravelType 
                    travelImage="/HomeAssets/Cocktail.svg" 
                    travelText="vida noturna"
                />
                
                <TravelType 
                    travelImage="/HomeAssets/Beach.svg" 
                    travelText="praia"
                />
                
                <TravelType 
                    travelImage="/HomeAssets/Building.svg" 
                    travelText="moderno"
                />
                
                <TravelType 
                    travelImage="/HomeAssets/Museum.svg" 
                    travelText="clássico"
                />
                
                <TravelType 
                    travelImage="/HomeAssets/Earth.svg" 
                    travelText="e mais..."
                />
                
            </Flex>
        </>
    )
}