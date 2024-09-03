import {Link} from 'react-router-dom';
import {Button, HStack, useColorMode, Text, Box, Container, Flex} from "@chakra-ui/react";
import { FaRegPlusSquare } from "react-icons/fa";
import { MdOutlineLightMode, MdDarkMode} from "react-icons/md";


export default function Navbar () {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <Container maxW={"80vw"}>
            <Flex my={10} direction={{base:"column", sm:"row"}}  justify={"space-between"}>
                <Link to={'/'}>
                    <Text
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize='4xl'
                    fontWeight='extrabold'
                    >
                        Product Store
                    </Text>
                </Link>
                <HStack>
                    <Link to={'/create'}>
                        <Button>
                            <FaRegPlusSquare/>
                        </Button>
                    </Link>  
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <MdOutlineLightMode/> : <MdDarkMode/>}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    )
}