import {Link} from 'react-router-dom';
import {Button, HStack, useColorMode, Text, Box} from "@chakra-ui/react";
import { FaRegPlusSquare } from "react-icons/fa";
import { MdOutlineLightMode, MdDarkMode} from "react-icons/md";


export default function Navbar () {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <HStack as={'nav'} justify={"space-around"} p={4}>
            <Link to={'/'}>
                <Text
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize='3xl'
                fontWeight='extrabold'
                >
                    Welcome to Chakra UI
                </Text>
            </Link>
            <Box>
                <Link to={'/create'}>
                    <Button colorScheme='purple' variant={'solid'} mr={4}>
                        <FaRegPlusSquare/>
                    </Button>
                </Link>            
                <Button onClick={toggleColorMode}>
                    {colorMode==='light' ? <MdOutlineLightMode/> : <MdDarkMode/>}
                </Button>                
            </Box>
        </HStack>
    )
}