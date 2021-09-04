import { NextApiRequest, NextApiResponse } from "next";
import {v4 as uuidv4 } from 'uuid';

export default (request: NextApiRequest, response: NextApiResponse) => {
    const cities = [
        {   id: uuidv4(), 
            name: 'Londres', 
            country: 'Reino Unido', 
            image: '/DestinationPictures/Europe/LondonTown.jpg', 
            flag: 'gb'
        },
        {   id: uuidv4(), 
            name: 'Paris', 
            country: 'França', 
            image: '/DestinationPictures/Europe/Paris.jpg', 
            flag: 'fr'
        },
        {   id: uuidv4(), 
            name: 'Roma', 
            country: 'Itália', 
            image: '/DestinationPictures/Europe/Roma.jpg', 
            flag: 'it'
        },
        {   id: uuidv4(), 
            name: 'Praga', 
            country: 'República Tcheca', 
            image: '/DestinationPictures/Europe/Prague.jpg', 
            flag: 'cz'
        },
        {   id: uuidv4(), 
            name: 'Amsterdã', 
            country: 'Holanda', 
            image: '/DestinationPictures/Europe/Amsterdam.jpg', 
            flag: 'nl'
        },
        {   id: uuidv4(), 
            name: 'Barcelona', 
            country: 'Espanha', 
            image: '/DestinationPictures/Europe/Barcelona.jpg', 
            flag: 'es'
        },
        {   id: uuidv4(), 
            name: 'Milão', 
            country: 'Itália', 
            image: '/DestinationPictures/Europe/Milan.jpg', 
            flag: 'it'
        },
        {   id: uuidv4(), 
            name: 'Berlim', 
            country: 'Alemanha', 
            image: '/DestinationPictures/Europe/Berlin.jpg', 
            flag: 'de'
        },
        {   id: uuidv4(), 
            name: 'Atenas', 
            country: 'Grécia', 
            image: '/DestinationPictures/Europe/Athens.jpg', 
            flag: 'gr'
        },
        {   id: uuidv4(), 
            name: 'Veneza', 
            country: 'Itália', 
            image: '/DestinationPictures/Europe/Venice.jpg', 
            flag: 'it'
        },
        {   id: uuidv4(), 
            name: 'Madrid', 
            country: 'Espanha', 
            image: '/DestinationPictures/Europe/Madrid.jpg', 
            flag: 'es'
        },
        {   id: uuidv4(), 
            name: 'Dublin', 
            country: 'Irlanda', 
            image: '/DestinationPictures/Europe/Dublin.jpg', 
            flag: 'ir'
        },
        {   id: uuidv4(), 
            name: 'Florença', 
            country: 'Itália', 
            image: '/DestinationPictures/Europe/Firenze.jpg', 
            flag: 'it'
        },
        {   id: uuidv4(), 
            name: 'Munique', 
            country: 'Alemanha', 
            image: '/DestinationPictures/Europe/Munich.jpg', 
            flag: 'de'
        },
        {   id: uuidv4(), 
            name: 'Bruxelas', 
            country: 'Bélgica', 
            image: '/DestinationPictures/Europe/Brussels.jpg', 
            flag: 'be'
        },
        {   id: uuidv4(), 
            name: 'Lisboa', 
            country: 'Portugal', 
            image: '/DestinationPictures/Europe/Lisbon.jpg', 
            flag: 'de'
        },
    ];

    return response.status(200).json(cities);
}