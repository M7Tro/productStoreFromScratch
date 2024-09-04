import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter,
    ModalCloseButton, FormControl, Input, Button
} from "@chakra-ui/react";
import {useState} from 'react';
import { useProduct } from "../../store/products";

export default function EditModal ({isOpen, onClose, productId, initialInputs}) {
    const [editInput, setEditInput] = useState({
        name: initialInputs.name,
        price: initialInputs.price,
        image: initialInputs.image,
    })
    const {editProduct} = useProduct();
    const handleEdit = async ()=>{
        await editProduct(productId, editInput);
        onClose();
    }
    
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Edit Product Data</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                    <Input placeholder='Procut name' mb={3} value={editInput.name} onChange={(e)=>{
                        setEditInput({...editInput, name: e.target.value})
                    }}/>

                    <Input placeholder='Price' mb={3} value={editInput.price} onChange={(e)=>{
                        setEditInput({...editInput, price: e.target.value})
                    }}/>

                    <Input placeholder='Image URL'  value={editInput.image} onChange={(e)=>{
                        setEditInput({...editInput, image: e.target.value})
                    }}/>
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={handleEdit}>
                    Save
                </Button>
                <Button onClick={onClose}>
                    Cancel
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}