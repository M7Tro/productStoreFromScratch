import { Card, Flex, Image, CardFooter, Text, IconButton, useDisclosure } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useProduct } from "../../store/products";
import EditModal from "./EditModal";

export default function Product ({product}){
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {deleteProduct} = useProduct();

    const handleDelete = async (productId) => {
        await deleteProduct(productId);
    }
    return (
        <Card minHeight={"200px"} key={product._id} transition={"all 0.3s"} _hover={{
            transform: "translateY(-10px)"
        }} maxH={"400px"}>
            <Flex overflow={'clip'} alignItems={'center'} height={"90%"} mt={10}>
                <Image src={product.image} alt={product.name + " image"}/>
            </Flex>
            <CardFooter>
                <Flex width={'100%'} justifyContent={'space-around'}>
                    <Text>{product.name}</Text>
                    <Text>${product.price}</Text>
                </Flex>
                <Flex>
                    <IconButton mr={4} onClick={()=>{
                        onOpen();
                        console.log("Clicked edit button of", product.name);
                        }} icon={<CiEdit/>}></IconButton>
                    <EditModal isOpen={isOpen} onClose={onClose} productId={product._id} initialInputs={product}/>
                    <IconButton icon={<MdDelete/>} onClick={()=>{handleDelete(product._id)}}></IconButton>
                </Flex>
            </CardFooter>
        </Card>
    )
}