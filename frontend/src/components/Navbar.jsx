import {Link} from 'react-router-dom';
import {Button, HStack, useColorMode} from "@chakra-ui/react";

export default function Navbar () {
    const {toggleColorMode} = useColorMode();
    return (
        <HStack as={'nav'}>
            <Link to={'/'}>
                <Button colorScheme='red' variant={'solid'}>Product Store</Button>
            </Link>
            <Link to={'/create'}>
                <Button colorScheme='red' variant={'solid'}>Create</Button>
            </Link>            
            <Button onClick={toggleColorMode}>Change Color Mode</Button>
        </HStack>
    )
}