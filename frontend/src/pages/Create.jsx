import {Container, FormControl, FormLabel, Input, Button, Text} from "@chakra-ui/react";
import {useState} from 'react';
import useCreate from "../hooks/useCreate";

export default function Create () {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: ""
    })
    //Importing states and method from the custom hook I have created for adding products:
    const {isPending, error, createProduct} = useCreate();

    const handleSubmit = async ()=>{
        await createProduct(newProduct);
        setNewProduct({name:"", price:"", image:""})
    }

    return (
        <Container maxW={"100vw"} centerContent>  
            <FormControl width={"33%"} textAlign={'center'}>
                <FormLabel>Name of the product</FormLabel>
                <Input placeholder="Name" name="name" type="text" mb={5} value={newProduct.value} onChange={(e)=>{
                    setNewProduct({...newProduct, name: e.target.value})
                }}></Input>
                <FormLabel>Price</FormLabel>
                <Input placeholder="Price" name="price" type="number" mb={5} value={newProduct.value} onChange={(e)=>{
                    setNewProduct({...newProduct, price: e.target.value})
                }}></Input>
                <FormLabel>Image URL</FormLabel>
                <Input placeholder="Image URL" name="image" type="url" mb={5} value={newProduct.value} onChange={(e)=>{
                    setNewProduct({...newProduct, image: e.target.value})
                }}></Input>
                <Button colorScheme="pink" size={'lg'} onClick={()=>{handleSubmit()}} isLoading={isPending}>Add</Button>
                <Text
                    p={3}
                    color={"blue"}
                >
                    {error}
                </Text>
            </FormControl>
        </Container>
    )
}