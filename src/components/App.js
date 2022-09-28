// create your App component here
import React, { useEffect, useState } from 'react'

function App () {

    const [isLoaded, setIsLoaded] = useState(false)
    const [dogImage, setDogImage] = useState([])

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                setDogImage(data.message)
                setIsLoaded(true)
            })
    }, [])

    if(!isLoaded) return <p>Loading...</p>

    return(
        <div>
            <img src={dogImage} alt='A Random Dog' />
        </div>
    )
}

export default App