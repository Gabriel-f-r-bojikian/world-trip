import { Flex, List } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

import TravelType from './TravelType';
import TravelBullet from './TravelBullet';

const breakpoints = createBreakpoints({
    sm: "30em",
    md: null,
    lg: null,
    xl: "80em",
  })

export default function Banner () {
    return (
        <>
            <Flex
                w="100vw"
                maxWidth="1440px"
                maxHeight="335px"
                backgroundImage="/HomeAssets/Background.png"
                justifyContent="center"
                alignItems="center"
                alignSelf="center"
                padding={{base: "16px 28px", lg: "5rem 8.75rem"}}
            >
            <Flex
                flexDirection="column"
                color="white"
            >
                <Flex
                    as="p"
                    fontWeight="700"
                    fontSize={{base: "20px", lg:"36"}}
                >
                    5 Continentes, <br/> infinitas possibilidades.
                </Flex>

                <Flex
                    as="p"
                    fontSize={{base: "14px", lg:"20"}}
                    fontWeight="400"
                >
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou
                </Flex>
            </Flex>

            <Flex 
                as="img"
                src="/HomeAssets/Airplane.svg"
                paddingTop="6rem"
                marginLeft="12rem"
                display={{ base: "none", lg: "inline"}}
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
                display={{base: "none", lg: "flex"}}
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

            <List
                display={{base: "flex", lg: "none"}}
                margin="0 50px"
                flexWrap="wrap"
                alignContent="center"
                justifyContent="space-between"
            >
                <TravelBullet travelText="vida noturna" />
                <TravelBullet travelText="praia" />
                <TravelBullet travelText="moderno" />
                <TravelBullet travelText="clássico" />
                <TravelBullet travelText="e mais..." />
            </List>
            
        </>
    )
}