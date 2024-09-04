import { useProduct} from "../../store/products";
import {useEffect} from 'react';
import {SimpleGrid} from "@chakra-ui/react";
import Product from "../components/Product";

export default function HomePage () {
    const {products, fetchProducts} = useProduct();
    useEffect(()=>{
        fetchProducts();
    },[fetchProducts])

    return ( 
        <div>
            <SimpleGrid columns={{base:1, sm:2, md:3, lg:4}} spacing={"30px"} mx={10}>
                {products && products.map((product) => (<Product key={product._id} product={product}/>))}
            </SimpleGrid>
        </div>
    )
}