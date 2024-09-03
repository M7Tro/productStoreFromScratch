import {Link} from 'react-router-dom';
import {Button, HStack} from "@chakra-ui/react";

export default function Navbar () {
    return (
        <HStack as={'nav'}>
            <Link to={'/'}>
                <Button colorScheme='red' variant={'solid'}>Product Store</Button>
            </Link>
            <Link to={'/create'}>
                <Button colorScheme='red' variant={'solid'}>Create</Button>
            </Link>            
        </HStack>
    )
}