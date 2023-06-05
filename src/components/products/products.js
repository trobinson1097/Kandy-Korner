import { useEffect, useState, } from "react"
import { useNavigate } from "react-router-dom"
import "./products.css"



export const ProductList = ({ searchTermState }) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [expensive, setExpensive] = useState(false)
    const navigate = useNavigate()


    useEffect(
        () => {
            const searchedProducts = products.filter(product => {
                return product.name.toLowerCase().includes(searchTermState.toLowerCase())
            })
            setFilteredProducts(searchedProducts)
        },
        [searchTermState]
    )

    useEffect(
        () => {
            //console.log("Initial state of Locations", tickets) // View the initial state of tickets
            fetch(`http://localhost:8088/products`)
                .then(response => response.json())
                .then((ProductsArray) => {
                    setProducts(ProductsArray)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )

    useEffect(
        () => {
            setFilteredProducts(products)
        },
        [products]
    )


    useEffect(
        () => {
            if (expensive) {
                const expensiveProducts = products.filter(product => product.price > 2.00)
                setFilteredProducts(expensiveProducts)
            }
            else {
                setFilteredProducts(products)
            }
        },
        [expensive]
    )




    return <>

        <>
            <button onClick={() => { setExpensive(true) }} className="button">Expensive Products</button>
            <button onClick={() => { setExpensive(false) }} className="button">All Products</button>
        </>
        <>
            <button onClick={() => navigate("/products/productForm")} className="button">Form the Kandy</button>
        </>
        <h2>List of Products</h2>
        <article className="products">
            {
                filteredProducts.map((product) => {
                    return <section className="product" key={product.id}>
                        <div>{product.name}</div>
                        <div>Pricer Per Pound: {product.price}</div><br />
                    </section>
                })
            }
        </article>
    </>
}