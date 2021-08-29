import { IoIosArrowBack } from 'react-icons/Io'
import { Flex } from '@chakra-ui/react'
import Link from 'next/link';

export default function ContinentHeader() {
    return (
        <Flex
            as="header"
            alignItems="center"
            justifyContent="space-around"
            w="100vw"
            h="6rem"
        >
                <Flex
                    cursor="pointer"
                    alt="Return to homepage"
                >
                    <Link href="/">
                        <IoIosArrowBack />
                    </Link>
                </Flex>
                <Flex
                    as="img"
                    src="/Logo.svg"
                    alt="World trip"
                    alignItems="center"
                    justifyContent="center"
                    w={184}
                />

                <Flex />
        </Flex>
    )
}