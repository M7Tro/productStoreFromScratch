import {useState} from 'react';
import { useToast } from '@chakra-ui/react';

export default function useCreate () {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const toast = useToast();
    
    const createProduct = async (newProduct) => {
        setIsPending(true);
        const res = await fetch('/api/products/', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newProduct)
        })
        const json = await res.json();
        if(res.ok){
            setIsPending(false);
            setError(null);
            console.log("Successfully added to the database:", json);
            toast({
                title: 'Product added',
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
            return json;
        }else{
            setIsPending(false);
            setError(json.error);
            toast({
                title: json.error,
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
        }
    }
    return {isPending, error, createProduct};
}