import {create} from 'zustand';

export const useProduct = create((set)=>({
    products: [],
    fetchProducts: async () => {
        const res = await fetch('/api/products/');
        const json = await res.json();
        console.log("Fetched from the server:", json);  
        set({products: json})
    },
    deleteProduct: async (productId)=>{
        const res = await fetch(`/api/products/${productId}`, {
            method: "DELETE"
        })
        const json = await res.json();
        set((state)=>({products: state.products.filter(product => product._id !== json._id)}))
    }
}))