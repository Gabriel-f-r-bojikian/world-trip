import { Flex } from '@chakra-ui/react'

export default function Header() {
    return (
        <Flex
            as="header"
            alignItems="top"
            justifyContent="center"
            w="100vw"
            h="6rem"
        >
                <Flex
                    as="img"
                    src="/Logo.svg"
                    alt="World trip"
                    alignItems="center"
                    w={184}
                />
        </Flex>
    )
}