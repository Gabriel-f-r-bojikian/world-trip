import { NextApiRequest, NextApiResponse } from "next";
import {v4 as uuidv4 } from 'uuid';

export default (request: NextApiRequest, response: NextApiResponse) => {
    const cities = [
        {   id: uuidv4(), 
            name: 'Londres', 
            country: 'Reino Unido', 
            image: '/DestinationPictures/Europe/London.jpg', 
            flag: 'gb'
        },
        {   id: uuidv4(), 
            name: 'Paris', 
            country: 'França', 
            image: '/DestinationPictures/Europe/London.jpg', 
            flag: 'fr'
        },
        {   id: uuidv4(), 
            name: 'Roma', 
            country: 'Itália', 
            image: '/DestinationPictures/Europe/London.jpg', 
            flag: 'it'
        },
        {   id: uuidv4(), 
            name: 'Praga', 
            country: 'República Tcheca', 
            image: '/DestinationPictures/Europe/London.jpg', 
            flag: 'cz'
        },
        {   id: uuidv4(), 
            name: 'Amsterdã', 
            country: 'Holanda', 
            image: '/DestinationPictures/Europe/London.jpg', 
            flag: 'nl'
        }
    ];

    return response.status(200).json(cities);
}