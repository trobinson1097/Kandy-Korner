import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Locations.css"


useEffect(
    () => {
        //console.log("Initial state of Locations", tickets) // View the initial state of tickets
        fetch(`http://localhost:8088/Locations`)
            .then(response => response.json())
            .then((LocationsArray) => {
                setTickets(LocationsArray)
            })
    },
    [] // When this array is empty, you are observing initial component state
)