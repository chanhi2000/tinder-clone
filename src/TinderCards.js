import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'steve jobs',
            url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
        },
        {
            name: 'mark zuckerberg',
            url: 'https://static6.businessinsider.com/image/5bed3c39110d4c1e971b25b2-1320/mark-zuckerberg.jpg'
        }
    ]);
    // Piece of code which runs based on a condition
    useEffect(() => {
        database
            .collection('people')
            .onSnapshot((snapshot) => 
                setPeople(snapshot.docs.map((doc) => doc.data()))
            );
    }, []);

    // BAD
    // const people = [];
    // people.push('sony', 'qazi');

    // GOOD
    // setPeople([...people, 'sony', 'qazi'])
    return (
        <div>
            <h1> Tinder Cards</h1>
            <div className="tinderCard__cardContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})`}} 
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards;
