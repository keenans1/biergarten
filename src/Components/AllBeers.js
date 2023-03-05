import React from "react";
import { Link } from "react-router-dom";
import '../CSS/AllBeers.css'

const AllBeers = (props) => {
    const beers = props.beers.map(beer => {

        const foods = beer['food_pairing'].map(food => {
            return (
                <li>{food}</li>
            )
        })

        return (
            <section>
                <div>
                    <Link to={`/beers/${beer.id}`} className='title'>
                        <p>{beer.name}</p>
                        <img src={beer['image_url']} alt={beer.name} />
                    </Link>
                    <p>ABV: {beer.abv}</p>
                </div>
                <div className="text-container">
                    {/* <p className="text">{beer.description}</p> */}
                    <h2>Food Pairings</h2>
                    <ul>
                        {foods}
                    </ul>
                    <button onClick={() => props.addFavorite(beer.name)}>Add to Favorites</button>
                    <p>Click the title or image to see more info about {beer.name}</p>
                </div>
            </section>
        )
    })

    return (
        <div className='beers-container'>{beers}</div>
    )
}

export default AllBeers

// have a sort feature?
// abv, aplphabetical, whatever