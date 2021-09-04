import { Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import CityCard from './CityCard';

export default function CitiesBox() {

    const [cities, setCities] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3000/api/europe')
        .then( response => response.json())
        .then( data => setCities(data))
        .catch( error => console.log(error))
    }, []);

    return(
        <Flex
            w="100%"
            maxWidth="1440px"
            justify="center"
            align="center"
            flexDirection="column"
        >
            <Text
                fontWeight="500"
                fontSize="2.25rem"
                fontColor="var(--dark-headings-and-text)"
                alignSelf="flex-start"
            >
                Cidades + 100
            </Text>

            <Flex
                flexDirection="row"
                flexWrap="wrap"
                justifyContent="space-around"
            >
                {cities.map(city => {
                    return <CityCard 
                        name={city.name} 
                        country={city.country} 
                        flag={`https://www.countryflags.io/` + city.flag + `/flat/64.png`} 
                        image={city.image}
                    />
                })}
                
            </Flex>

        </Flex>
    )
}