import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export const ProductForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [productTypes, setTypes] = useState([])
    const [product, update] = useState({
        name: "",
        price: 0,
        productTypeId: 0
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */

    useEffect(
        () => {
            //console.log("Initial state of Locations", tickets) // View the initial state of tickets
            fetch(`http://localhost:8088/productTypes`)
                .then(response => response.json())
                .then((ProductTypeArray) => {
                    setTypes(ProductTypeArray)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )



    const navigate = useNavigate()
    const kandyUser = localStorage.getItem("Kandy_user")
    const kandyUserObject = JSON.parse(kandyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API
        /*
        {
        "userId": 3,
        "description": "",
        "emergency": true,
        "dateCompleted": ""
        }
    */
        const productToSendToApi = {
            name: product.name,
            price: product.price,
            productTypeId: product.productTypeId

        }
        // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/products`, {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(productToSendToApi)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/products")
            })
    }

    return (
        <form className="productForm">
            <h2 className="productForm__title">New Kandy Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Product Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name The New Kandy"
                        //setting a value for the form field for initial state 
                        value={product.name}
                        onChange={
                            (evt) => {
                                const copy = { ...product }
                                copy.name = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Product Price:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Price"
                        //setting a value for the form field for initial state 
                        value={product.price}
                        onChange={
                            (evt) => {
                                const copy = { ...product }
                                copy.price = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="product__heading">Product Type:</div>
                {productTypes.map((type) => {
                    return (
                        <div className="product__form" key={`productType--${type.id}`}>
                            <input
                                required autoFocus
                                onChange={
                                    (changeEvent) => {
                                        const copy = { ...product }
                                        copy.productTypeId = parseInt(changeEvent.target.value)
                                        update(copy);
                                    }}
                                type="radio"
                                name="productType"
                                value={type.id}
                            /> {" "}
                            {type.name}
                        </div>
                    )
                })}
            </fieldset>







            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Product
            </button>
        </form>
    )
}