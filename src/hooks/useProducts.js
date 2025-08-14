import {useState, useEffect} from 'react'

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts();    
    }, []);

    const fetchProducts = () => {
        setTimeout(() => {
            fetch("/products.json").then((response) => {
                if (!response.ok) throw new Error("Error al cargar productos");
                return response.json();
            })
                .then((data) => {
                    setProducts(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    setLoading(false);
                });
        }, 5000);
    };

    return { products, loading };
}

export default useProducts;