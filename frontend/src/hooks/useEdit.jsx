import {useState} from 'react';
import { useProduct } from '../../store/products';

export default function useCreate () {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const {editProduct} = useProduct();

    const submitEdit = async (productId, newProductData) =>{
        setIsPending(true);
        const res = await fetch(`/api/products/${productId}}`, {
            method: "POST",
            headers: {"Content-Type": "applicatin/json"},
            body: JSON.stringify(newProductData)
        })
        const json = await res.json();
        if(res.ok){
            setIsPending(false);
            setError(null);
            editProduct(productId, json.updatedProduct);
        }else{
            setIsPending(false);
            setError(json.error);
        }
    }

    return {isPending, error, submitEdit};
}