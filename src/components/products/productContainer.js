import { useState } from "react"
import { ProductList } from "./products"
import { ProductSearch } from "./productSearch"

export const ProductContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>

        <ProductSearch setterFunction={setSearchTerms} />
        <ProductList searchTermState={searchTerms} />

    </>

}