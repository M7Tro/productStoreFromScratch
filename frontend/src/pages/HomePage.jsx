import { useProduct} from "../../store/products";
import {useEffect} from 'react';
import {SimpleGrid, Card, Image, CardBody, CardFooter, Flex, Text} from "@chakra-ui/react";

export default function HomePage () {
    const {products, fetchProducts} = useProduct();
    useEffect(()=>{
        fetchProducts();
    },[fetchProducts])
    return (
        <div>
            <SimpleGrid columns={{base:1, sm:2, md:3, lg:4}} spacing={"30px"}>
                {products && products.map((product) => (
                    <Card minHeight={"200px"} key={product._id}>
                        <CardBody>
                            <Image src={product.image} alt={product.name + " image"}/>
                        </CardBody>
                        <CardFooter>
                            <Flex width={'100%'} justifyContent={'space-around'}>
                                <Text>{product.name}</Text>
                                <Text>${product.price}</Text>
                            </Flex>
                        </CardFooter>
                    </Card>
                ))}
            </SimpleGrid>
        </div>
    )
}