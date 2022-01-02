import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import ImageSearch from "./ImageSearch";
const App = () => {
    const [Image, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState("");

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=peshawar&appid=7c7e9cd92d87b486a43d527c331db2be`)
            .then(res => res.json())
            .then(data => {
                setImages(data.hits);
                // setIsLoading(flase);
            })
            .catch(err => console.log(err))
    }, []);
    return (
        <div className="container mx-auto">
            <ImageSearch />
            <ImageSearch searchText={(text) => setTerm(text)} />
            {isLoading ? <h2 className="text-6xl text-center mx-auto mt-32">Loading....</h2>
                : <div className="grid grid-cols-3 gap-4">
                    {
                        Image.map(Image => (
                            <ImageCard key={Image.id} image />
                        ))}
                </div>}
        </div>

    )

}

export default App;