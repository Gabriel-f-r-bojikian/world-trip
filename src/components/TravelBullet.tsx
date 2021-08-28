import { ListIcon, ListItem, Text } from '@chakra-ui/react';
import { GiPlainCircle } from 'react-icons/gi';

interface travelBulletProps {
    travelText: string;
}

export default function TravelBullet(props: travelBulletProps) {
    return(
        <ListItem
            margin="0.8125rem 0"
            fontSize="1.125rem"
            fontWeight="500"
        >
                <ListIcon as={GiPlainCircle} color="#FFBA08" />
                {props.travelText}
        </ListItem>
    )
}