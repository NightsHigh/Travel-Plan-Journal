import React from "react"
import data from "./data"
import Card from "./src/Components/Card"
import Header from "./src/Components/Header"

export default function App(){
    const TravelCards = data.map(item => (
        <Card
            key={item.id}
            item={item}
        />
    ));

    return (  
        <div>
            <Header/>
            <section>
                {TravelCards}
            </section>
        </div>
    );
}
