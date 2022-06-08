import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/Locations"
import { ProductContainer } from "../products/productContainer"
import { ProductForm } from "../products/productForm"
import { ProductList } from "../products/products"
import { ProductSearch } from "../products/productSearch"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>
                    <div>Kandy Kandy Kandy</div>



                    <Outlet />
                </>
            }>
                
                <Route path="locations" element={ < LocationList /> } />

                <Route path="products" element={ 
                
                <ProductContainer />

                }/>

                <Route path="/products/productForm" element={ < ProductForm /> } />

            </Route>
            
        </Routes>
    )
}
