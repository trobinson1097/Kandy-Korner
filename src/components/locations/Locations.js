import { useEffect, useState } from "react"
import "./Locations.css"

export const LocationList = () => {
    const [locations, setLocations] = useState([])


    useEffect(
        () => {
            //console.log("Initial state of Locations", tickets) // View the initial state of tickets
            fetch(`http://localhost:8088/locations`)
                .then(response => response.json())
                .then((LocationsArray) => {
                    setLocations(LocationsArray)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )



    return <>
        <h2>List of Locations</h2>
        <article className="locations">
            {
                locations.map((location) => {
                    return <section className="location" key={location.id}>
                        <div>{location.address}</div>
                        <div>Store Square Footage: {location.squareFootage}</div><br />
                    </section>
                })
            }
        </article>
    </>
}