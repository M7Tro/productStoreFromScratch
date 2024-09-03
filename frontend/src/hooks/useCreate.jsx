import {useState} from 'react';

export default function useCreate () {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    
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
            return json;
        }else{
            setIsPending(false);
            setError(json);
        }
    }
    return {isPending, error, createProduct};
}