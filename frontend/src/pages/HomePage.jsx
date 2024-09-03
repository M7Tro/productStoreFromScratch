import { useProduct } from "../../store/products";
import {useEffect} from 'react';
import {Heading, Text} from "@chakra-ui/react";

export default function HomePage () {
    const {products, fetchProducts} = useProduct();
    useEffect(()=>{
        fetchProducts();
    },[fetchProducts])
    return (
        <div>
            <Heading textAlign={'center'}>Products:</Heading>
            {products && products.map((product)=>(
                <Text key={product._id}>{product.name}</Text>
            ))}
        </div>
    )
}