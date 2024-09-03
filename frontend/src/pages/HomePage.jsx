import { useProduct} from "../../store/products";
import {useEffect} from 'react';
import {SimpleGrid, Card, Image, CardBody, CardFooter, Flex, Text, IconButton} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";


export default function HomePage () {
    const {products, fetchProducts, deleteProduct} = useProduct();
    useEffect(()=>{
        fetchProducts();
    },[fetchProducts])

    const handleDelete = async (productId) => {
        await deleteProduct(productId);
    }
    return (
        <div>
            <SimpleGrid columns={{base:1, sm:2, md:3, lg:4}} spacing={"30px"} mx={10}>
                {products && products.map((product) => (
                    <Card minHeight={"200px"} key={product._id} transition={"all 0.3s"} _hover={{
                        transform: "translateY(-10px)"
                    }}>
                        <CardBody>
                            <Image src={product.image} alt={product.name + " image"}/>
                        </CardBody>
                        <CardFooter>
                            <Flex width={'100%'} justifyContent={'space-around'}>
                                <Text>{product.name}</Text>
                                <Text>${product.price}</Text>
                            </Flex>
                            <Flex>
                                <IconButton mr={4} icon={<CiEdit/>}></IconButton>
                                <IconButton icon={<MdDelete/>} onClick={()=>{handleDelete(product._id)}}></IconButton>
                            </Flex>
                        </CardFooter>
                    </Card>
                ))}
            </SimpleGrid>
        </div>
    )
}